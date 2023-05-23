<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class CoproprieteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('coproprietes')->insert([
            [
            'nom' => 'Nour',
            'adresse'=> 'Kouilma Tetouan',
            'type'=>'immeuble',
            'ville'=>'Tetouan',
            'code_postale'=>223443,
            'balance'=>565656,
            

            ]
            ]);
 }
}
