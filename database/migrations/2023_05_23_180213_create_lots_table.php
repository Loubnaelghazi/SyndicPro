<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lots', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('numero');
            $table->string('batiment');
            $table->enum('type', ['Appartement', 'Local commercial', 'Autre'])->default('Appartement');
            $table->integer('etage');
            $table->string('porte');
            $table->unsignedBigInteger('proprietaire_id')->nullable();
            $table->unsignedBigInteger('locataire_id')->nullable();
            $table->timestamps();

            $table->foreign('proprietaire_id')->references('id')->on('proprietaires')->onDelete('set null');
            $table->foreign('locataire_id')->references('id')->on('locataires')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lots');
    }
};
