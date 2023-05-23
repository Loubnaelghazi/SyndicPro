<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Locataire;
use App\Models\Proprietaire;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lot>
 */
class LotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'numero' => $this->faker->randomNumber(2),
            'batiment' => $this->faker->randomElement(['A', 'B', 'C']),
            'type' => $this->faker->randomElement(['Appartement', 'Local commercial', 'autre']),
            'etage' => $this->faker->numberBetween(1, 10),
            'porte' => $this->faker->numberBetween(1, 100),
            'proprietaire_id' => Proprietaire::factory(),
            'locataire_id' => Locataire::factory(),
        ];
    }
}
