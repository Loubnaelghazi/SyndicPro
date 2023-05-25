<?php

namespace App\Http\Controllers;

use App\Models\Locataire;
use Illuminate\Http\Request;
use Carbon\Carbon;


class LocataireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locataire = Locataire::all();

        return response()->json($locataire);
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
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'cni' => 'required|string',
            'tel' => 'string',
            'email' => 'email',
            'genre' => 'required|string',
            'date_naissance' => 'required|date',
            'nationalite' => 'required|string',
            'date_fin' => 'required|date',
            'date_debut' => 'date',
        ]);
    
        $locataire = Locataire::create([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'cni' => $validatedData['cni'],
            'tel' => $validatedData['tel'],
            'email' => $validatedData['email'],
            'genre' => $validatedData['genre'],
            'date_naissance' => Carbon::parse($validatedData['date_naissance'])->toDateString(),
            'nationalite' => $validatedData['nationalite'],
            'date_fin' => Carbon::parse($validatedData['date_fin'])->toDateString(),
            'date_debut' => Carbon::parse($validatedData['date_debut'])->toDateString(),
        ]);
    
        return response()->json($locataire);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $locataire = Locataire::find($id);

        if (!$locataire) {
            return response()->json(['message' => 'Locataire not found'], 404);
        }

        return response()->json($locataire);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Locataire $locataire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $locataire = Locataire::findOrFail($id);

        $locataire->update($request->all());

        return response()->json(['message' => 'locataire updated successfully', 'locataire' => $locataire]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Locataire $locataire)
    {
        $locataire->delete();
        return ['message' => 'Le locataire a été supprimée avec succés !'];
    }
}
