<?php

namespace App\Http\Controllers;
use App\Models\Proprietaire;
use Illuminate\Http\Request;

class ProprietaireController extends Controller
{
   
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 5);
        $proprietaire = Proprietaire::paginate($perPage);

        return response()->json($proprietaire);
    }
    public function getAll()
    {
        $proprietaire = Proprietaire::get();

        return response()->json($proprietaire);
    }
    
   ////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////
  
    public function show($id)
    {

        $proprietaire = Proprietaire::find($id);

        if (!$proprietaire) {
            return response()->json(['message' => 'Proprietaire not found'], 404);
        }

        return response()->json($proprietaire);
    }

   
     /////////////////////////////////////////////////////////////////////////////
  
  
    public function update(Request $request, $id)
    {
        $proprietaire = Proprietaire::findOrFail($id);

        $proprietaire->update($request->all());

        return response()->json(['message' => 'Propietaire updated successfully', 'proprietaire' => $proprietaire]);
    }

    /////////////////////////////////////////////////////////////////////////////
    public function destroy(Proprietaire $proprietaire)
    {
        $proprietaire->delete();
        return ['message' => 'Votre propriétaire a été supprimée avec succés !'];


    }
}
