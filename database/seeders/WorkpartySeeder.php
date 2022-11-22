<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorkTeam;
use App\Models\User;

class WorkpartySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $workparty = [
            [
                'job' => 'Felling tree',
                'work_date' => '30-12-22',
                'users_ids'=> [1,5,8]
            ],
            [
                'job' => 'Road breaking',
                'work_date' => '25-12-22',
                'users_ids'=> [3,5,8]
            ],
            [
                'job' => 'Construction of house',
                'users_ids'=> [7,5,8],
                'work_date' => '10-12-22',
            ],
            [
                'job' => 'Grinding',
                'work_date' => '11-12-22',
                'users_ids'=> [7,9,8]

            ],
            [
                'job' => 'Root canal',
                'work_date' => '05-12-22',
                'users_ids'=> [7,8]

            ],
        ];


        foreach ($workparty as $party) {
           $workTeam = new WorkTeam;
           $workTeam->job = $party['job'];
           $workTeam->work_date = $party['work_date'];
           $workTeam->save();
            
           foreach ($party['users_ids'] as $user) {
                $workTeam->users()->attach($user);
            }
        }
    }
}
