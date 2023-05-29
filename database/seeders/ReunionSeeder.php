<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ReunionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reunions')->insert([
            [
                'titre' => 'loubna',
                'ordre_jour' => 'Kouilma ',
                'pv' => 'text',
                'decision' => 'nchalah',
                'date' => Carbon::createFromFormat('d/m/Y', '29/10/2003'),
                'heure' => Carbon::createFromTime(12, 0), //12:00
                // 12:00
                'lieu' => 'lot 2',
                'sujet' => 'mn3rf',
                'type' => 'assemblees_generales',
                'chemin_document' => 'Tetouan',




            ]
        ]);
    }
}
