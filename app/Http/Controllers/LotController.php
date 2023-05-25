<?php

namespace App\Http\Controllers;

use App\Models\Lot;
use Illuminate\Http\Request;

class LotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lot = Lot::with('locataire')->with('proprietaire')->get();

        return response()->json($lot);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'numero' => 'required|integer',
            'batiment' => 'required|string',
            'type' => 'required|string',
            'etage' => 'required|integer',
            'porte' => 'required|string',
            'proprietaire_id' => 'integer',
            'locataire_id' => 'integer',
        ]);

        $lot = Lot::create([
            'numero' => $validatedData['numero'],
            'batiment' => $validatedData['batiment'],
            'type' => $validatedData['type'],
            'etage' => $validatedData['etage'],
            'porte' => $validatedData['porte'],
            'proprietaire_id' => $validatedData['proprietaire_id'],
            'locataire_id' => $validatedData['locataire_id'],
        ]);
        
        return response()->json($lot);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lot $lot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lot $lot)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lot $lot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lot $lot)
    {
        //
    }
}
