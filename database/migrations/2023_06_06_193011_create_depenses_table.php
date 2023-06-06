<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('depenses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('designation');
            $table->string('description');
            $table->unsignedBigInteger('id_fournisseur')->nullable();
            $table->string('fournisseur_externe')->nullable();
            $table->decimal('montant', 10, 2);
            $table->enum('statut', ['non_payee', 'payee', 'partiellement_payee'])->default('non_payee');
            $table->decimal('montant_restant', 10, 2);
            $table->date('date_depense');
            $table->json('paiements_ids')->nullable();
            $table->timestamps();

            $table->foreign('id_fournisseur')->references('id')->on('fournisseurs')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('depenses');
    }
};