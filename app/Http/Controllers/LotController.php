<?php

namespace App\Http\Controllers;

use App\Models\Lot;
use Illuminate\Http\Request;

class LotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 5);
        $lot = Lot::with('locataire')->with('proprietaire')->paginate($perPage);

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
    public function show($id)
    {
        $lot = Lot::with('locataire')->with('proprietaire')->find($id);

        if (!$lot) {
            return response()->json(['message' => 'lot not found'], 404);
        }

        return response()->json($lot);
    }

   
    public function update(Request $request, $id)
    {
        $lot = Lot::findOrFail($id);

        $lot->update($request->all());

        return response()->json(['message' => 'lot updated successfully', 'lot' => $lot]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lot $lot)
    {
        $lot->delete();
        return ['message' => 'Le locataire a été supprimée avec succés !'];

    }
}
