<?php

namespace App\Http\Controllers;

use App\Models\Copropriete;
use Illuminate\Http\Request;

class CoproprieteController extends Controller
{

    public function index() /* select de tous les elements */
    {
        $copropriete = Copropriete::all();

        return response()->json($copropriete); /* json pour qu elle peut etre lue par react */
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $copropriete = Copropriete::create([
            'id' => $request->id,
            'nom' => $request->nom,
            'adresse' => $request->adresse,
            'type' => $request->type,
            'ville' => $request->ville,
            'code_postale' => $request->code_postale,
            'balance' => $request->balance,
        ]);
        return response()->json($copropriete);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $copropriete = Copropriete::find($id);

        if (!$copropriete) {
            return response()->json(['message' => 'Copropriete not found'], 404);
        }

        return response()->json($copropriete);
    }


    public function edit(Copropriete $copropriete)
    {
        //
    }


    public function update(Request $request, Copropriete $copropriete)
    {
        $copropriete->update($request->all());
        
        return response()->json($copropriete);
    }


    public function destroy(Copropriete $copropriete)
    {
        $copropriete->delete();
        return ['message' => 'Votre coproprieté a été supprimée avec succés !'];
    }
}