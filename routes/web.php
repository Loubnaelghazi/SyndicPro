<?php

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
    return Inertia::render('coproriete/Copopriete'); /* par defaut dans pages  */
});

Route::get('/add-copropriete', function () {
    return Inertia::render('coproriete/AddCopopriete'); 
});

Route::get('/Modifier-copropriete', function () {
    return Inertia::render('coproriete/ModifierCopropriete'); 
});


/* Fin copropriete */


/* lots routes */
Route::get('/lot', function () {
    return Inertia::render('lot/Lot'); 
});

/* fin lots */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
