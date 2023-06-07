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
            $table->date('date_paiement')->nullable();
            $table->decimal('montant', 10, 2);
            $table->enum('mode_paiement', ['virement', 'versement', 'especes', 'cheque', 'autre']);
            $table->string('commentaire')->nullable();
            $table->string('justificatif')->nullable();
            $table->enum('type', ['depense', 'cotisations']);
            $table->unsignedBigInteger('depense_id');
            $table->timestamps();

            
            $table->foreign('depense_id')->references('id')->on('depenses')->onDelete('cascade');            
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
