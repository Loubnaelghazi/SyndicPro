<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       /*  $this->call(CoproprieteSeeder::class);
        $this->call(FournisseurSeeder::class);
        $this->call(ProprietaireSeeder::class);
        $this->call(LotSeeder::class); */
        $this->call(ReunionSeeder::class);
      //  $this->call(LocataireSeeder::class);
    }
}
