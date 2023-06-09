<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Paiement extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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
