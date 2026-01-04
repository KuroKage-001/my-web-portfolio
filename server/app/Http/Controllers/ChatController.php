<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatMessage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'session_id' => 'nullable|string',
        ]);

        $sessionId = $request->session_id ?? Str::uuid()->toString();
        $userMessage = $request->message;

        // Save user message
        ChatMessage::create([
            'session_id' => $sessionId,
            'role' => 'user',
            'message' => $userMessage,
        ]);

        // Get conversation history (last 5 messages for context)
        $history = ChatMessage::where('session_id', $sessionId)
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->reverse()
            ->map(function ($msg) {
                return [
                    'role' => $msg->role,
                    'content' => $msg->message,
                ];
            })
            ->toArray();

        // Call Hugging Face API
        try {
            $response = $this->callHuggingFaceAPI($userMessage, $history);
            
            // Save assistant response
            $assistantMessage = ChatMessage::create([
                'session_id' => $sessionId,
                'role' => 'assistant',
                'message' => $response,
            ]);

            return response()->json([
                'success' => true,
                'session_id' => $sessionId,
                'message' => $response,
                'timestamp' => $assistantMessage->created_at,
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, I encountered an error. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    private function callHuggingFaceAPI($message, $history)
    {
        $apiKey = env('HUGGINGFACE_API_KEY');
        
        // Using a smaller, faster model for quick responses
        $model = 'microsoft/DialoGPT-medium';
        
        // Build a simple prompt from history
        $prompt = $this->buildConversationPrompt($message, $history);

        try {
            // Use direct Inference API (faster than router)
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->timeout(120)->post("https://api-inference.huggingface.co/models/{$model}", [
                'inputs' => $prompt,
                'parameters' => [
                    'max_new_tokens' => 150,
                    'temperature' => 0.7,
                    'top_p' => 0.9,
                    'return_full_text' => false,
                ],
                'options' => [
                    'wait_for_model' => true, // Wait for model to load
                    'use_cache' => true,
                ],
            ]);

            if ($response->successful()) {
                $data = $response->json();
                
                // Handle array response
                if (isset($data[0]['generated_text'])) {
                    return trim($data[0]['generated_text']);
                }
                
                // Handle direct text response
                if (isset($data['generated_text'])) {
                    return trim($data['generated_text']);
                }
                
                \Log::error('Unexpected response format', ['data' => $data]);
                return 'I received an unexpected response. Please try again.';
            }

            // Handle non-successful responses
            $statusCode = $response->status();
            $body = $response->body();
            
            \Log::error('Hugging Face API failed', [
                'status' => $statusCode,
                'body' => $body,
            ]);

            $errorData = $response->json();
            if (isset($errorData['error'])) {
                $errorMsg = is_string($errorData['error']) ? $errorData['error'] : json_encode($errorData['error']);
                
                if (str_contains($errorMsg, 'loading') || str_contains($errorMsg, 'warming')) {
                    return 'The AI model is currently loading. Please wait 20-30 seconds and try again.';
                }
                
                if (str_contains($errorMsg, 'rate limit')) {
                    return 'Too many requests. Please wait a moment and try again.';
                }
                
                \Log::error('Hugging Face Error: ' . $errorMsg);
            }

            return 'I encountered an error connecting to the AI service. Please try again.';
            
        } catch (\Illuminate\Http\Client\ConnectionException $e) {
            \Log::error('Connection timeout: ' . $e->getMessage());
            return 'The request took too long. Please try again in a moment.';
        } catch (\Exception $e) {
            \Log::error('Unexpected error: ' . $e->getMessage());
            return 'An unexpected error occurred. Please try again.';
        }
    }

    private function getSystemPromptWithPortfolioContext()
    {
        return "You are Leo's AI assistant on his portfolio website. You help visitors learn about Leo and answer their questions.

ABOUT LEO:
Leo is a passionate full-stack web developer with strong hands-on experience in building scalable, secure, and user-centered web-based systems. He specializes in modern technologies and has a solid foundation in database-driven application development.

SKILLS:
Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Laravel, PHP, REST APIs, MySQL, MongoDB
Tools: Git, AWS, Cloud Computing, Project Management

EXPERIENCE:
- Develops complete web applications using React, Laravel, MySQL, MongoDB, and Git/GitHub
- Strong emphasis on clean code, scalable architecture, and maintainable system design
- Works across both frontend and backend, ensuring performance and usability
- Committed to continuous learning and professional growth

CERTIFICATIONS:
- Data Analytics Essentials (Cisco)
- Information Technology Fundamentals (IBM)
- Operating Systems Basics (Cisco)
- Web Development Fundamentals (IBM)
- Working in a Digital World: Professional Skills (IBM)
- Cloud Essentials (IBM)
View all credentials: https://www.credly.com/users/leomar-escobin

FEATURED PROJECTS:
1. E-Commerce Platform - Full-featured platform with shopping cart, payment integration, and admin dashboard (React, Node.js, MongoDB, Stripe)
2. Task Management App - Collaborative app with real-time updates and drag-and-drop interface (React, Firebase, Tailwind CSS)
3. Weather Dashboard - Real-time weather dashboard with location-based forecasts and interactive maps (React, OpenWeather API, Chart.js)

When answering questions:
- Be friendly, concise, and helpful
- Provide specific information about Leo's skills and experience when asked
- Help with general coding questions too
- If asked about projects, describe them enthusiastically
- Encourage visitors to explore the portfolio and reach out to Leo";
    }

    private function buildConversationPrompt($message, $history)
    {
        $context = "You are Leo's AI assistant. Leo is a full-stack web developer skilled in React, Laravel, Node.js, and modern web technologies. Answer questions about Leo's skills and help with coding questions. Be concise and friendly.\n\n";
        
        // Add recent conversation history
        foreach ($history as $msg) {
            $role = $msg['role'] === 'user' ? 'User' : 'Bot';
            $context .= "{$role}: {$msg['content']}\n";
        }
        
        return $context;
    }

    private function buildSimplePrompt($message)
    {
        // Not used anymore with the new chat completions format
        return $message;
    }

    private function buildPrompt($message, $history)
    {
        $systemPrompt = "You are a helpful AI assistant that provides general assistance and answers coding questions. Be concise, friendly, and accurate.";
        
        $prompt = $systemPrompt . "\n\n";
        
        // Add conversation history
        foreach ($history as $msg) {
            $role = $msg['role'] === 'user' ? 'User' : 'Assistant';
            $prompt .= "{$role}: {$msg['content']}\n";
        }
        
        $prompt .= "Assistant:";
        
        return $prompt;
    }

    public function getHistory(Request $request)
    {
        $request->validate([
            'session_id' => 'required|string',
        ]);

        $messages = ChatMessage::where('session_id', $request->session_id)
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'messages' => $messages,
        ]);
    }
}
