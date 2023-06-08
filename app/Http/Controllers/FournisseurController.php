<?php

namespace App\Http\Controllers;

use App\Models\Fournisseur;
use Illuminate\Http\Request;

class FournisseurController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 5);
        $fournisseur = Fournisseur::paginate($perPage);

        return response()->json($fournisseur);
    }

    public function getAll()
    {
        $fournisseur = Fournisseur::get();

        return response()->json($fournisseur);
    }

    ////////////////////////////////////////////////////////////
    public function store(Request $request)
    {
        $fournisseur = Fournisseur::create([
            'id' => $request->id,
            'raison' => $request->raison,
            'ice' => $request->ice,
            'tel' => $request->tel,
            'ville' => $request->ville,
            'adresse' => $request->adresse,
            'email' => $request->email,


        ]);
        return response()->json($fournisseur);
    }

    /////////////////////////////////////////////////////////////////////////

    public function show($id)
    {

        $fournisseur = Fournisseur::find($id);

        if (!$fournisseur) {
            return response()->json(['message' => 'Fournisseur not found'], 404);
        }

        return response()->json($fournisseur);
    }


    /////////////////////////////////////////////////////////////////////////////


    public function update(Request $request, $id)
    {
        $fournisseur = Fournisseur::findOrFail($id);

        $fournisseur->update($request->all());

        return response()->json(['message' => 'Fournisseur updated successfully', 'Fournisseur' => $fournisseur]);
    }

    /////////////////////////////////////////////////////////////////////////////
    public function destroy(Fournisseur $fournisseur)
    {
        $fournisseur->delete();
        return ['message' => 'Votre fournisseur a été supprimée avec succés !'];


    }
}
