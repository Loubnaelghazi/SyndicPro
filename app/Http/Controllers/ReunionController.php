<?php

namespace App\Http\Controllers;

use App\Models\Reunion;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReunionController extends Controller
{
    
    public function index(Request $request)
    {
        $type = $request->input('type');

        // Vérifier si le paramètre 'type' a été fourni dans la requête
        if ($type) {
            // Filtrer les réunions selon le type
            $reunions = Reunion::where('type', $type)->get();
        } else {
            // Récupérer toutes les réunions si aucun type n'est spécifié
            $reunions = Reunion::all();
        }

        return response()->json($reunions);
    }

   
////////////////////////////////////////////

   
    public function store(Request $request)
    {
   /*      $document = $request->file('chemin_document');

        // Vérifier si un fichier a été téléchargé
        if ($document) {
            // Générer un nom unique pour le fichier
            $fileName = time() . '_' . $document->getClientOriginalName();

            // Déplacer le fichier vers le répertoire de stockage (par exemple, le dossier "public/storage")
            $filePath = $document->storeAs('public', $fileName);
        } else {
            return response()->json(['error' => 'Veuillez télécharger un document.'], 400);
        }
 */
        $reunion = Reunion::create([
            'titre' => $request->titre,
            'ordre_jour' => $request->ordre_jour,
            'pv' => $request->pv,
            'decision' => $request->decision,
            'date' => Carbon::createFromFormat('Y-m-d', $request->date),
            'heure' => Carbon::createFromFormat('H:i', $request->heure),
            'lieu' => $request->lieu,
            'sujet' => $request->sujet,
            'type' => $request->type,
            'chemin_document' => $request->chemin_document,


        ]);
        return response()->json($reunion);

    }

    ////////////////////////////////////////////
    public function show($id)
    {
        $reunion = Reunion::find($id);

        if (!$reunion) {
            return response()->json(['message' => 'reunion not found'], 404);
        }

        return response()->json($reunion);
    }

    ////////////////////////////////////////////////
   
    public function update(Request $request, $id)
    {
        $reunion = Reunion::findOrFail($id);

        $reunion->update($request->all());

        return response()->json(['message' => 'reunion updated successfully', 'reunion' => $reunion]);
    }
//////////////////////////////////////////////////////
    public function destroy(Reunion $reunion)
    {
        $reunion->delete();
        return ['message' => 'Le locataire a été supprimée avec succés !'];

    }
}
