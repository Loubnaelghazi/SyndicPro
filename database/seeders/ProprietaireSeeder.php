<?php

namespace Database\Seeders;

use App\Models\Proprietaire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProprietaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Proprietaire::factory()->count(10)->create();
    }
}
