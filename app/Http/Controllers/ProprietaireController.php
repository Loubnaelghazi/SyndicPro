<?php

namespace App\Http\Controllers;

use App\Models\Proprietaire;
use Illuminate\Http\Request;

class ProprietaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proprietaire = Proprietaire::all();

        return response()->json($proprietaire);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

   
    public function store(Request $request)
    {
        $proprietaire = Proprietaire::create([
            'id' => $request->id,
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'cni' => $request->cni,
            'tel' => $request->tel,
            'email' => $request->email,
            'genre' => $request->genre,
            'date_naissance' => $request->date_naissance,
            'nationalite' => $request->nationalite,


        ]);
        return response()->json($proprietaire);
    }


  
    public function show(Proprietaire $proprietaire)
    {
        //
    }

   
     
    public function edit(Proprietaire $proprietaire)
    {
        //
    }

  
    public function update(Request $request, Proprietaire $proprietaire)
    {
        
    }

    
    public function destroy(Proprietaire $proprietaire)
    {
        $proprietaire->delete();
        return ['message' => 'Votre propriétaire a été supprimée avec succés !'];


    }
}
