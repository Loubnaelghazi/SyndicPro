<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Copropriete extends Model
{

    use HasFactory;

    protected $fillable = ['nom', 'adresse', 'type', 'ville', 'code_postale', 'balance'];

}