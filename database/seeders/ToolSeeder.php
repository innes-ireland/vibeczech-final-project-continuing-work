<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tool;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
              $tools = [
            [
                'name' => 'Drill',
                'manufacturer' => 'DeWALT',
                'vibration_rating' => 5,
                'noise_rating' => 6
            ],
            [
                'name' => 'Jackhammer',
                'manufacturer' => 'Proto',
                'vibration_rating' => 10,
                'noise_rating' => 8
            ],
            [
                'name' => 'Chainsaw',
                'manufacturer' => 'DeWALT',
                'vibration_rating' => 13,
                'noise_rating' => 9
            ],
            [
                'name' => 'Lawnmower',
                'manufacturer' => 'Mac Tools',
                'vibration_rating' => 8,
                'noise_rating' => 10
            ],
            [
                'name' => 'Concrete breaker',
                'manufacturer' => 'Makita',
                'vibration_rating' => 14,
                'noise_rating' => 13
            ],
            [
                'name' => 'Disc cutters',
                'manufacturer' => 'Husrvarna',
                'vibration_rating' => 11,
                'noise_rating' => 8
            ],
            [
                'name' => 'Impact wrenches',
                'manufacturer' => 'Makita',
                'vibration_rating' => 7,
                'noise_rating' => 8
            ],
            [
                'name' => 'Power Hammer',
                'manufacturer' => 'DeWALT',
                'vibration_rating' => 9,
                'noise_rating' => 10
            ],
            [
                'name' => 'Scabbler',
                'manufacturer' => 'Mac Tools',
                'vibration_rating' => 6,
                'noise_rating' => 4
            ]
        ];

        foreach ($tools as $tool) {
            Tool::create($tool);
        }
    }
}
