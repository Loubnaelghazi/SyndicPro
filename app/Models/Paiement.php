<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    use HasFactory;

    protected $fillable = [
        'date_paiement',
        'montant',
        'mode_paiement',
        'commentaire',
        'justificatif',
        'type',
        'depense_id',
    ];

    public function depense()
    {
        return $this->belongsTo(Depense::class);
    }
}
