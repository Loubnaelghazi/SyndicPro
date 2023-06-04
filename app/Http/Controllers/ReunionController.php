<?php

namespace App\Http\Controllers;

use App\Models\Reunion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
class ReunionController extends Controller
{




    public function download($fileName)
    {
        $filePath = storage_path('app/public/' . $fileName);

        if (file_exists($filePath)) {
            return response()->download($filePath);
        }

        return abort(404);
    }



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
        ]);
        // Vérifiez si un fichier a été téléchargé
        if ($request->hasFile('chemin_document')) {
            $file = $request->file('chemin_document');

            // Enregistrez le fichier dans la collection 'pv' associée au modèle Reunion
            $media = $reunion->addMedia($file)->toMediaCollection('ReunionsPVs');

            // Obtenez le chemin d'accès au fichier pour le stockage ou l'affichage ultérieur
            $filePath = $media->getPath();
            // Par exemple, vous pouvez le stocker dans un système de fichiers local ou un service de stockage en nuage tel que AWS S3

            // Mettez à jour l'attribut 'chemin_document' dans votre modèle Reunion avec le chemin d'accès au fichier
            $reunion->chemin_document = $filePath;
            $reunion->save();
        }
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
        $reunion->update($request->except('chemin_document'));

        // Vérifier si un nouveau fichier a été téléchargé
        if ($request->hasFile('chemin_document')) {
            $nouveauCheminDocument = $request->file('chemin_document');

            // Supprimer l'ancien fichier s'il existe
            if ($reunion->hasMedia('chemin_document')) {
                $reunion->deleteMedia('chemin_document');
            }

            // Ajouter le nouveau fichier
            $reunion->addMedia($nouveauCheminDocument)->toMediaCollection('ReunionsPVs');
        }
        return response()->json(['message' => 'reunion updated successfully', 'reunion' => $reunion]);
    }
//////////////////////////////////////////////////////
    public function destroy(Reunion $reunion)
    {
        $reunion->delete();
        return ['message' => 'La réunion a été supprimée avec succés !'];

    }
    ////////////////////////////////////////////////////
   /*  public function download($fileName)
    {
        $filePath = storage_path('app/public/' . $fileName);

        if (file_exists($filePath)) {
            return response()->download($filePath);
        }

        return abort(404);
    } */
}
