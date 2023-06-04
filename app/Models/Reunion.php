<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Reunion extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['titre', 'ordre_jour', 'pv', 'decision', 'date', 'heure', 'lieu', 'sujet', 'type', 'chemin_document'];
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('image')
            ->width(200)
            ->height(200);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('ReunionsPVs')
            ->singleFile();
    }
}