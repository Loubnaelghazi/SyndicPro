<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    use HasFactory;
    public function proprietaire()
    {
        return $this->belongsTo(Proprietaire::class);
    }

    public function locataire()
    {
        return $this->belongsTo(Locataire::class);
    }

}
