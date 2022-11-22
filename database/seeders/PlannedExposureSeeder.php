<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\PlannedExposure;

class PlannedExposureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('TRUNCATE TABLE exposure_instance');

        $plannedExp = [
            [
                'created_by'=> 1,
                'worker_exposed' => 9,
                'exposure_start'=> '2022-11-26 09:25:11',
                'exposure_end'=> '2022-11-26 14:25:11',
                'tool_id'=> 3
            ],
            [
                'created_by'=> 1,
                 'worker_exposed' => 10,
                'exposure_start'=> '2022-11-26 10:25:11',
                'exposure_end'=> '2022-11-26 15:25:11',
                'tool_id'=> 2
            ],
             [
                'created_by'=> 1,
                 'worker_exposed' => 3,
                'exposure_start'=> '2022-11-27 11:25:11',
                'exposure_end'=> '2022-11-27 14:25:11',
                'tool_id'=> 5
            ],
             [
                'created_by'=> 1,
                 'worker_exposed' => 7,
                'exposure_start'=> '2022-11-27 10:25:11',
                'exposure_end'=> '2022-11-27 14:25:11',
                'tool_id'=> 2
            ],
             [
                'created_by'=> 1,
                 'worker_exposed' => 5,
                'exposure_start'=> '2022-11-29 10:25:11',
                'exposure_end'=> '2022-11-29 14:25:11',
                'tool_id'=> 5
            ],
            [
                'created_by'=> 1,
                 'worker_exposed' => 5,
                'exposure_start'=> '2022-11-29 10:25:11',
                'exposure_end'=> '2022-11-29 14:25:11',
                'tool_id'=> 1
            ],
            [
                'created_by'=> 1,
                 'worker_exposed' => 6,
                'exposure_start'=> '2022-11-30 08:25:11',
                'exposure_end'=> '2022-11-30 17:25:11',
                'tool_id'=> 3

            ],
            [
                'created_by'=> 1,
                 'worker_exposed' => 2,
                'exposure_start'=> '2022-11-26 12:25:11',
                'exposure_end'=> '2022-11-26 14:25:11',
                'tool_id'=> 3

            ],
            [
                'created_by'=> 1,
                 'worker_exposed' => 2,
                'exposure_start'=> '2022-11-26 12:25:11',
                'exposure_end'=> '2022-11-26 14:25:11',
                'tool_id'=> 4

            ],
             
        ];

        foreach ($plannedExp as $plan) {
        //    $exposureInstance = new ExposureInstance;
        //    $exposureInstance->plan_id = $exp['plan_id'];
        //    $exposureInstance->exposure_value = $exp['exposure_value'];
        //    $exposureInstance->exposure_start = $exp['exposure_start'];
        //    $exposureInstance->exposure_finish = $exp['exposure_finish'];
        //    $exposureInstance->duration_minutes = $exp['duration_minutes'];
        //    $exposureInstance->save();
        $plannedExposure = PlannedExposure::create($plan);
            
 
        }
    
    }
}
