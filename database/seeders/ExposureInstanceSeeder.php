<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ExposureInstance;
use Illuminate\Support\Facades\DB;

class ExposureInstanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('TRUNCATE TABLE exposure_instance');

        $exposure = [
            [
                'plan_id' => 1,
                'user_id' => 5,
                'exposure_value'=> 345,
                'exposure_start'=> '2022-11-26 10:25:11',
                'exposure_finish'=> '2022-11-26 14:25:11',
                'duration_minutes'=> 5,
                'tool_id'=> 4
            ],
            [
                'plan_id' => 1,
                'user_id' => 5,
                'exposure_value'=> 165,
                'exposure_start'=> '2022-11-26 9:25:00',
                'exposure_finish'=> '2022-11-26 14:25:11',
                'duration_minutes'=> 1,
                'tool_id'=> 4
            ],
             [
                'plan_id' => 2,
                'user_id' => 4,
                'exposure_value'=> 232,
                'exposure_start'=> '2022-11-27 10:25:00',
                'exposure_finish'=> '2022-11-27 14:25:11',
                'duration_minutes'=> 8,
                'tool_id'=> 3
            ],
             [
                'plan_id' => 2,
                'user_id' => 9,
                'exposure_value'=> 365,
                'exposure_start'=> '2022-11-27 11:25:00',
                'exposure_finish'=> '2022-11-27 14:25:11',
                'duration_minutes'=> 2,
                'tool_id'=> 5
            ],
             [
                'plan_id' => 2,
                'user_id' => 3,
                'exposure_value'=> 178,
                'exposure_start'=> '2022-11-27 09:25:11',
                'exposure_finish'=> '2022-11-21 14:25:11',
                'duration_minutes'=> 5,
                'tool_id'=> 5
            ],
            [
                'plan_id' => 3,
                'user_id' => 5,
                'exposure_value'=> 389,
                'exposure_start'=>'2022-11-29 15:25:11',
                'exposure_finish'=> '2022-11-29 18:25:11',
                'duration_minutes'=> 3,
                'tool_id'=> 5
            ],
            [
                'plan_id' => 5,
                'user_id' => 5,
                'exposure_value'=> 204,
                'exposure_start'=> '2022-11-29 10:25:00',
                'exposure_finish'=> '2022-11-29 14:25:11',
                'duration_minutes'=> 8,
                'tool_id'=> 6

            ],
            [
                'plan_id' => 4,
                'user_id' => 5,
                'exposure_value'=> 299,
                'exposure_start'=> '2022-11-29 10:25:11',
                'exposure_finish'=> '2022-11-29 14:25:11',
                'duration_minutes'=>1,
                'tool_id'=> 1

            ],
            [
                'plan_id' => 1,
                'user_id' => 6,
                'exposure_value'=> 249,
                'exposure_start'=> '2022-11-30 7:25:11',
                'exposure_finish'=> '2022-11-30 14:25:11',
                'duration_minutes'=> 2,
                'tool_id'=> 1

            ],
             [
                'plan_id' => 6,
                'user_id' => 6,
                'exposure_value'=> 145,
                'exposure_start'=> '2022-11-30 8:25:11',
                'exposure_finish'=> '2022-11-30 14:25:11',
                'duration_minutes'=> 4,
                'tool_id'=> 4

            ],
             [
                'plan_id' => 2,
                'user_id' =>6,
                'exposure_value'=> 400,
                'exposure_start'=> '2022-12-21 09:25:11',
                'exposure_finish'=> '2022-12-21 14:25:12',
                'duration_minutes'=> 5,
                'tool_id'=> 2

            ],
             [
                'plan_id' => 6,
                'user_id' => 17,
                'exposure_value'=> 300,
                'exposure_start'=> '2022-11-25 09:25:11',
                'exposure_finish'=> '2022-11-25 14:00:11',
                'duration_minutes'=> 5,
                'tool_id'=> 3
            ],
             [
                'plan_id' => 1,
                'user_id' => 17,
                'exposure_value'=> 245,
                'exposure_start'=> '2022-11-26 10:25:11',
                'exposure_finish'=> '2022-11-26 14:25:11',
                'duration_minutes'=> 2,
                'tool_id'=> 2
            ],
             [
                'plan_id' => 4,
                'user_id' => 17,
                'exposure_value'=> 345,
                'exposure_start'=> '2022-11-26 09:25:11',
                'exposure_finish'=> '2022-11-26 16:25:11',
                'duration_minutes'=> 6,
                'tool_id'=> 4
            ],
             [
                'plan_id' => 1,
                'user_id' => 17,
                'exposure_value'=> 105,
                'exposure_start'=> '2022-11-27 11:25:11',
                'exposure_finish'=> '2022-11-27 18:25:11',
                'duration_minutes'=> 1,
                'tool_id'=> 5
            ],
        ];

        foreach ($exposure as $exp) {
        //    $exposureInstance = new ExposureInstance;
        //    $exposureInstance->plan_id = $exp['plan_id'];
        //    $exposureInstance->exposure_value = $exp['exposure_value'];
        //    $exposureInstance->exposure_start = $exp['exposure_start'];
        //    $exposureInstance->exposure_finish = $exp['exposure_finish'];
        //    $exposureInstance->duration_minutes = $exp['duration_minutes'];
        //    $exposureInstance->save();
        $exposureInstance = ExposureInstance::create($exp);
            
 
        }
    }
}
