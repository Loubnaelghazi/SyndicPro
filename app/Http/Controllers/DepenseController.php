<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Depense;

class DepenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 5);
        $depenses = Depense::with('paiements')->with('fournisseur')->paginate($perPage);

        return response()->json($depenses);
    }

    public function show($id)
    {
        $depense = Depense::with('paiements')->with('fournisseur')->findOrFail($id);

        return response()->json($depense);
    }

    public function store(Request $request)
    {
        
        $request->validate([
            'designation' => 'required|string',
            'description' => 'nullable|string',
            'id_fournisseur' => 'nullable|exists:fournisseurs,id',
            'fournisseur_externe' => 'nullable|string',
            'montant' => 'required|numeric',
            'statut' => 'required|in:non_payee,payee,partiellement_payee',
            'montant_restant' => 'required|numeric',
            'date_depense' => 'nullable|date',
        ]);

        $depense = Depense::create($request->all());

        return response()->json(['message' => 'Depense created successfully', 'depense' => $depense], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'designation' => 'required|string',
            'description' => 'nullable|string',
            'id_fournisseur' => 'nullable|exists:fournisseurs,id',
            'fournisseur_externe' => 'nullable|string',
            'montant' => 'required|numeric',
            'statut' => 'required|in:non_payee,payee,partiellement_payee',
            'montant_restant' => 'required|numeric',
            'date_depense' => 'nullable|date',
        ]);

        $depense = Depense::findOrFail($id);
        $depense->update($request->all());

        return response()->json(['message' => 'Depense updated successfully', 'depense' => $depense]);
    }

    public function destroy($id)
    {
        $depense = Depense::findOrFail($id);
        $depense->delete();

        return response()->json(['message' => 'Depense deleted successfully']);
    }

    public function paiements($id)
    {
        $depense = Depense::findOrFail($id);
        $paiements = $depense->paiements;

        return response()->json($paiements);
    }
}
