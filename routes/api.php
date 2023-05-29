<?php

use App\Http\Controllers\CoproprieteController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\LocataireController;
use App\Http\Controllers\LotController;
use App\Http\Controllers\ProprietaireController;
use App\Http\Controllers\ReunionController;
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

//Locataires routes 
Route::get('/locataires', [LocataireController::class, 'index']);
Route::post('/locataires', [LocataireController::class, 'store']);
Route::put('/locataires/{locataire}', [LocataireController::class, 'update']);
Route::delete('locataires/{locataire}', [LocataireController::class, 'destroy']);
Route::get('/locataires/{locataire}', [LocataireController::class, 'show']);

////////////////////////////////////////

//Lots routes 
Route::get('/lots', [LotController::class, 'index']);
Route::post('/lots', [LotController::class, 'store']);
Route::put('/lots/{lot}', [LotController::class, 'update']);
Route::delete('lots/{lot}', [LotController::class, 'destroy']);
Route::get('/lots/{lot}', [LotController::class, 'show']);

////////////////////////////////////////

//fournisseurs routes 
Route::get('/fournisseurs', [FournisseurController::class, 'index']);
Route::post('/fournisseurs', [FournisseurController::class, 'store']);
Route::put('/fournisseurs/{fournisseur}', [FournisseurController::class, 'update']);
Route::delete('fournisseurs/{fournisseur}', [FournisseurController::class, 'destroy']);
Route::get('/fournisseurs/{fournisseur}', [FournisseurController::class, 'show']);
///////////////////////////////////////////////

//reunions routes
Route::get('/reunions', [ReunionController::class, 'index']);
Route::post('/reunions', [ReunionController::class, 'store']);
Route::put('/reunions/{reunion}', [ReunionController::class, 'update']);
Route::delete('reunions/{reunion}', [ReunionController::class, 'destroy']);
Route::get('/reunions/{reunion}', [ReunionController::class, 'show']);
//////////////////////////////////////////////////////////////////////////////////
