<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('depenses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('designation');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('id_fournisseur')->nullable();
            $table->string('fournisseur_externe')->nullable();
            $table->decimal('montant', 10, 2);
            $table->enum('statut', ['non_payee', 'payee', 'partiellement_payee'])->default('non_payee');
            $table->decimal('montant_restant', 10, 2)->default(DB::raw('montant'));;
            $table->date('date_depense')->nullable();
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