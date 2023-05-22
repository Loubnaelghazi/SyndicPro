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
Route::get('/lots/modifier', function () {
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
Route::get('/proprietaires/modifier', function () {
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
Route::get('/fournisseurs/modifier', function () {
    return Inertia::render('fournisseur/ModifierFournisseur');
});

/* fin */











Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
