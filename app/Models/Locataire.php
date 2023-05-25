<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Locataire extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'cni', 'tel', 'email', 'genre', 'date_naissance' , 'nationalite','date_fin','date_debut'];
    
    public function lots()
    {
        return $this->hasMany(Lot::class);
    }
}
