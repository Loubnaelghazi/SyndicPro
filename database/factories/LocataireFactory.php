<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Locataire>
 */
class LocataireFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'cni' => $this->faker->unique()->numerify('########'),
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'genre' => $this->faker->randomElement(['Male', 'Female']),
            'date_naissance' => $this->faker->date(),
            'nationalite' => $this->faker->country,
            'date_fin' => $this->faker->date(),
            'date_debut' => $this->faker->date(),
        ];
    }
}
