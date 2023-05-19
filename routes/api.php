<?php

use App\Http\Controllers\CoproprieteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/coproprietes', [CoproprieteController::class, 'index']);
Route::post('/coproprietes', [CoproprieteController::class, 'store']);
Route::delete('coproprietes/{copropriete}', [CoproprieteController::class, 'destroy']);