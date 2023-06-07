<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depense extends Model
{
    use HasFactory;

    protected $fillable = [
        'designation',
        'description',
        'id_fournisseur',
        'fournisseur_externe',
        'montant',
        'statut',
        'montant_restant',
        'date_depense',
    ];

    public function fournisseur()
    {
        return $this->belongsTo(Fournisseur::class, 'id_fournisseur');
    }

    public function paiements()
    {
        return $this->hasMany(Paiement::class);
    }
}
