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
        Schema::create('locataires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('cni');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->enum('genre', ['Male', 'Female']);
            $table->date('date_naissance');
            $table->string('nationalite');
            $table->date('date_fin')->nullable();
            $table->date('date_debut');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locataires');
    }
};
