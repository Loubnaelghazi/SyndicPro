<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReclamationCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id_proprietaire' => 'exists:proprietaires,id',
            'sujet' => 'required',
            'description'=> 'string' ,
            'reclameur' =>'string',
            'date' => 'date',
            'date_resolution'=> 'date',
            'statut' => 'required|in:en_attente,en_cours,resolue,fermee',
            'priorite' => 'integer',
        ];
    }
}
