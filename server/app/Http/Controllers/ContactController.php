<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $contact = Contact::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your message has been sent successfully.',
                'data' => $contact
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Oops! Something went wrong. Please try again later.'
            ], 500);
        }
    }

    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return response()->json([
            'success' => true,
            'data' => $contacts
        ]);
    }
}
