<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

Route::post('/contact', [ContactController::class, 'store']);
Route::get('/contacts', [ContactController::class, 'index']);

// Chatbot routes
Route::post('/chat', [ChatController::class, 'sendMessage']);
Route::get('/chat/history', [ChatController::class, 'getHistory']);
