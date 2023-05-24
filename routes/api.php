<?php

use App\Http\Controllers\CoproprieteController;
use App\Http\Controllers\LocataireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//coproprietes routes
Route::get('/coproprietes', [CoproprieteController::class, 'index']);
Route::post('/coproprietes', [CoproprieteController::class, 'store']);
Route::delete('coproprietes/{copropriete}', [CoproprieteController::class, 'destroy']);
Route::put('/coproprietes/{copropriete}', [CoproprieteController::class, 'update']);
Route::get('/coproprietes/{copropriete}', [CoproprieteController::class, 'show']);
/////////////////////////////////////////

//Proprietaires routes

//Locataire routes 

Route::get('/locataires', [LocataireController::class, 'index']);

////////////////////////////////////////