<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proprietaire extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'cni', 'tel', 'email', 'genre', 'date_naissance','nationalite'];

    public function lots()
    {
        return $this->hasMany(Lot::class);
    }

}
