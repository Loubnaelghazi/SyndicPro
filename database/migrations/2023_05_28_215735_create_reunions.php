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
        Schema::create('reunions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titre');
            $table->string('ordre_jour');
            $table->text('pv');
            $table->text('decision');
            $table->date('date');
            $table->time('heure');
            $table->string('lieu');
            $table->string('sujet');
            $table->enum('type', ['assemblees_generales', 'reunion_informations'])->nullable();
            $table->string('chemin_document');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reunions');
    }
};
