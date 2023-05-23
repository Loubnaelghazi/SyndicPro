<?php

namespace Database\Seeders;

use App\Models\Locataire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class LocataireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Locataire::factory()->count(10)->create();
    }
}
