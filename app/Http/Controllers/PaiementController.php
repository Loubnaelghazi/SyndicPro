<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paiement;

class PaiementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paiements = Paiement::all();

        return response()->json($paiements);
    }

    public function show($id)
    {
        $paiement = Paiement::findOrFail($id);

        return response()->json($paiement);
    }

    public function store(Request $request)
    {
        $request->validate([
            'date_paiement' => 'nullable|date',
            'montant' => 'required|numeric',
            'mode_paiement' => 'required|in:virement,versement,especes,cheque,autre',
            'commentaire' => 'nullable|string',
            'justificatif' => 'nullable|string',
            'type' => 'required|in:depense,cotisations',
            'depense_id' => 'required|exists:depenses,id',
        ]);

        $paiement = Paiement::create($request->all());
        $paiement->addMediaFromRequest('file')->toMediaCollection('paiements/depenses/justificatifs');

        return response()->json(['message' => 'Paiement created successfully', 'paiement' => $paiement], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'date_paiement' => 'nullable|date',
            'montant' => 'required|numeric',
            'mode_paiement' => 'required|in:virement,versement,especes,cheque,autre',
            'commentaire' => 'nullable|string',
            'justificatif' => 'nullable|string',
            'type' => 'required|in:depense,cotisations',
            'depense_id' => 'required|exists:depenses,id',
        ]);

        $paiement = Paiement::findOrFail($id);
        $paiement->update($request->all());

        return response()->json(['message' => 'Paiement updated successfully', 'paiement' => $paiement]);
    }

    public function destroy($id)
    {
        $paiement = Paiement::findOrFail($id);
        $paiement->delete();

        return response()->json(['message' => 'Paiement deleted successfully']);
    }

    public function download($id)
    {
        $paiement = Paiement::findOrFail($id);
        $media = $paiement->getFirstMedia('paiements/depenses/justificatifs');
        return $media;
    }
}
