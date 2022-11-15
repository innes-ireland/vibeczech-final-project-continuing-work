<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('TRUNCATE table users;');
        $users = [
            [
              'first_name' => 'Admina',
              'last_name' => 'Boss',
              'username' => 'adminaboss',
              'email' => 'adminaboss@vibeczech.test',
              'phone_number' => 123456789,
              'is_admin' => true,
              'password' => 'adminaboss',
            ],
            [
              'first_name' => 'Innes',
              'last_name' => 'Wales',
              'username' => 'themenace',
              'email' => 'themenace@vibeczech.test',
              'phone_number' => 234567890,
              'is_admin' => false,
              'password' => 'themenace',
            ],
            [
              'first_name' => 'Aidan',
              'last_name' => 'Andabettin',
              'username' => 'shoujolover',
              'email' => 'shoujolover@vibeczech.test',
              'phone_number' => 345678901,
              'is_admin' => false,
              'password' => 'shoujolover',
            ],
            [
              'first_name' => 'Bina',
              'last_name' => 'Feefyefofina',
              'username' => 'willwork4skulls',
              'email' => 'willwork4skulls@vibeczech.test',
              'phone_number' => 456789012,
              'is_admin' => false,
              'password' => 'willwork4skulls',
            ],
            [
              'first_name' => 'Bri',
              'last_name' => 'Likethecheese',
              'username' => 'notthestinkykind',
              'email' => 'notthestinkykind@vibeczech.test',
              'phone_number' => 567890123,
              'is_admin' => false,
              'password' => 'notthestinkykind',
            ],
            [
              'first_name' => 'David',
              'last_name' => 'Dresden',
              'username' => 'probablyevil',
              'email' => 'probablyevil@vibeczech.test',
              'phone_number' => 678901234,
              'is_admin' => false,
              'password' => 'probablyevil',
            ],
            [
              'first_name' => 'Andrea',
              'last_name' => 'Bruiser',
              'username' => 'knucklesandwich',
              'email' => 'knucklesandwich@vibeczech.test',
              'phone_number' => 789012345,
              'is_admin' => false,
              'password' => 'knucklesandwich',
            ],
            [
              'first_name' => 'Eddie',
              'last_name' => 'Sofashionable',
              'username' => 'onecooldude',
              'email' => 'onecooldude@vibeczech.test',
              'phone_number' => 8901234567,
              'is_admin' => false,
              'password' => 'onecooldude',
            ],
            [
              'first_name' => 'Max',
              'last_name' => 'Speed',
              'username' => 'madmax9001',
              'email' => 'madmax9001@vibeczech.test',
              'phone_number' => 9012345678,
              'is_admin' => false,
              'password' => 'madmax9001',
            ],
            [
              'first_name' => 'Dijana',
              'last_name' => 'Sharpeyes',
              'username' => 'businessshark',
              'email' => 'businessshark@vibeczech.test',
              'phone_number' => 112345678,
              'is_admin' => false,
              'password' => 'businessshark',
            ],
            [
              'first_name' => 'Jakub',
              'last_name' => 'McClimberson',
              'username' => 'iloverocks',
              'email' => 'iloverocks@vibeczech.test',
              'phone_number' => 987654321,
              'is_admin' => false,
              'password' => 'iloverocks',
            ],

            [
              'first_name' => 'Jakub',
              'last_name' => 'Bigmouth',
              'username' => 'wontshutup',
              'email' => 'wontshutup@vibeczech.test',
              'phone_number' => 876543210,
              'is_admin' => false,
              'password' => 'wontshutup',
            ],
            [
              'first_name' => 'Nadiia',
              'last_name' => 'Earlybird',
              'username' => 'getstheworm',
              'email' => 'getstheworm@vibeczech.test',
              'phone_number' => 765432109,
              'is_admin' => false,
              'password' => 'getstheworm',
            ],
            [
              'first_name' => 'Ivan',
              'last_name' => 'Bringsstrudel',
              'username' => 'bakedgoodsyum',
              'email' => 'bakedgoodsyum@vibeczech.test',
              'phone_number' => 654321098,
              'is_admin' => false,
              'password' => 'bakedgoodsyum',
            ],
            [
              'first_name' => 'Anthony',
              'last_name' => 'Prettylunches',
              'username' => 'number1chef',
              'email' => 'number1chef@vibeczech.test',
              'phone_number' => 543210987,
              'is_admin' => false,
              'password' => 'number1chef',
            ],
            [
              'first_name' => 'Tuan',
              'last_name' => 'Haslegsapparently',
              'username' => 'secretbosstype',
              'email' => 'secretbosstype@vibeczech.test',
              'phone_number' => 432109876,
              'is_admin' => false,
              'password' => 'secretbosstype',
            ],
        ];

        foreach ($users as $user) {
            $user['password'] = bcrypt($user['password']);
            User::create($user);
        }
    }
}
