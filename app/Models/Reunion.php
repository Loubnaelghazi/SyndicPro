<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reunion extends Model
{
    use HasFactory;
    protected $fillable = ['titre', 'ordre_jour', 'pv', 'decision', 'date', 'heure', 'lieu', 'sujet','type','chemin_document'];

}
