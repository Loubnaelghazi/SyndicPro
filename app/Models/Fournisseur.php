<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fournisseur extends Model
{
    
    use HasFactory;
    protected $fillable = ['id', 'raison', 'ice', 'tel', 'ville', 'adresse', 'email'];

    public function depenses()
    {
        return $this->hasMany(Depense::class, 'id_fournisseur');
    }

}
