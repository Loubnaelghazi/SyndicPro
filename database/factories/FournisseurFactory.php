<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fournisseur>
 */
class FournisseurFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'raison' => fake()->company(),
            'ice' => fake()->unique()->randomNumber(6),
            'tel' => fake()->phoneNumber(),
            'ville' => fake()->city(),
            'adresse' => fake()->address(),
            'email' => fake()->unique()->safeEmail(),
        ];
    }
}