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
        Schema::create('reclamations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_proprietaire');
            $table->string('sujet');
            $table->text('description')->nullable();
            $table->string('reclameur')->nullable();
            $table->date('date')->nullable();
            $table->date('date_resolution')->nullable();
            $table->enum('statut', ['en_attente', 'en_cours', 'resolue', 'fermee'])->default('en_attente');
            $table->integer('priorite')->nullable();
            $table->timestamps();

            $table->foreign('id_proprietaire')->references('id')->on('proprietaires')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reclamations');
    }
};
