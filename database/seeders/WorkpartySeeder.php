<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorkTeam;

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
            ],
            [
                'job' => 'Road breaking',
                'work_date' => '25-12-22',
            ],
            [
                'job' => 'Construction of house',
                'work_date' => '10-12-22',
            ],
            [
                'job' => 'Grinding',
                'work_date' => '11-12-22',
            ],
            [
                'job' => 'Root canal',
                'work_date' => '05-12-22',
            ],
        ];

        foreach ($workparty as $party) {
            WorkTeam::create($party);
        }
    }
}
