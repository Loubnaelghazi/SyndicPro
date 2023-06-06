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
        Schema::create('paiements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_paiement');
            $table->decimal('montant', 10, 2);
            $table->enum('mode_paiement', ['virement', 'versement', 'especes', 'cheque', 'autre']);
            $table->string('commentaire')->nullable();
            $table->string('justificatif')->nullable();
            $table->enum('type', ['depense', 'cotisations']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiements');
    }
};
