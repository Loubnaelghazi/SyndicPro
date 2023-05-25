<?php

use App\Http\Controllers\CoproprieteController;
use App\Http\Controllers\LocataireController;
use App\Http\Controllers\ProprietaireController;
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
Route::get('/proprietaires', [ProprietaireController::class, 'index']);
Route::post('/proprietaires', [ProprietaireController::class, 'store']);
Route::delete('proprietaires/{proprietaire}', [ProprietaireController::class, 'destroy']);
Route::put('/proprietaires/{proprietaire}', [ProprietaireController::class, 'update']);
Route::get('/proprietaires/{proprietaire}', [ProprietaireController::class, 'show']);

/////////////////////////////////////////

//Locataire routes 
Route::get('/locataires', [LocataireController::class, 'index']);
Route::post('/locataires', [LocataireController::class, 'store']);
Route::put('/locataires/{locataire}', [LocataireController::class, 'update']);
Route::delete('locataires/{locataire}', [LocataireController::class, 'destroy']);
Route::get('/locataires/{locataire}', [LocataireController::class, 'show']);

////////////////////////////////////////