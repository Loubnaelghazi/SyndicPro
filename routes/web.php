<?php

use App\Http\Controllers\CoproprieteController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/* Coproprietes routes */

Route::get('/copropriete', function () {
    return Inertia::render('coproriete/Copropriete'); /* par defaut dans pages  */
});

Route::get('/copropriete/ajouter', function () {
    return Inertia::render('coproriete/AddCopopriete');
});

Route::get('/copropriete/modifier/{id}', function () {
    return Inertia::render('coproriete/ModifierCopropriete'); 


});
/* Fin copropriete */


/* lots routes */
Route::get('/lots', function () {
    return Inertia::render('lot/Lot'); 
});
Route::get('/lots/ajouter', function () {
    return Inertia::render('lot/AjouterLot'); 
});
Route::get('/lots/modifier/{id}', function () {
    return Inertia::render('lot/ModifierLot'); 
});

/* fin lots */

/* Routes of proprietaires */

Route::get('/proprietaires', function () {
    return Inertia::render('proprietaire/Proprietaire');
});
Route::get('/proprietaires/ajouter', function () {
    return Inertia::render('proprietaire/AjouterProprietaire');
});
Route::get('/proprietaires/modifier/{id}', function () {
    return Inertia::render('proprietaire/ModifierProprietaire');
});

/* fin */


/* Routes of fournisseurs*/

Route::get('/fournisseurs', function () {
    return Inertia::render('fournisseur/Fournisseurs');
});
Route::get('/fournisseurs/ajouter', function () {
    return Inertia::render('fournisseur/AjouterFournisseur');
});
Route::get('/fournisseurs/modifier/{id}', function () {
    return Inertia::render('fournisseur/ModifierFournisseur');
});

/* fin */

/* routes of reunions */

Route::get('/reunions', function () {
    return Inertia::render('reunions/Reunion');
});
Route::get('/reunions/ajouter', function () {
    return Inertia::render('reunions/AjouterReunion');
});
Route::get('/reunions/modifier/{id}', function () {
    return Inertia::render('reunions/ModifierReunion');
});

Route::get('/reunions/consulter/{id}', function () {
    return Inertia::render('reunions/ConsulterReunion');
});

/* fin */

/* Routes of recalamations*/

Route::get('/reclamations', function () {
    return Inertia::render('reclamation/Reclamations');
});
Route::get('/reclamations/afficher', function () {
    return Inertia::render('reclamation/AfficherReclamation');
});
Route::get('/reclamations/modifier', function () {
    return Inertia::render('reclamation/ModifierReclamation');
});
Route::get('/reclamations/ajouter', function () {
    return Inertia::render('reclamation/AjouterReclamation');
});

/* fin */

/* routes of cotisations */

Route::get('/cotisations', function () {
    return Inertia::render('cotisations/Cotisations');
});

/* fin */

/* Routes of depenses */

Route::get('/depenses', function () {
    return Inertia::render('depenses/Depense');
});

Route::get('/depenses/ajouter', function () {
    return Inertia::render('depenses/AjouterDepense'); 
});
Route::get('/depenses/modifier', function () {
    return Inertia::render('depenses/ModifierDepense');
});


/* fin */


/* locataires routes */
Route::get('/locataires', function () {
    return Inertia::render('locataire/Locataire'); 
});
Route::get('/locataires/ajouter', function () {
    return Inertia::render('locataire/AjouterLocataire'); 
});
Route::get('/locataires/modifier/{id}', function () {
    return Inertia::render('locataire/ModifierLocataire'); 
});

/* fin locataires */

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
