<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['id' => 1, 'first_name' => 'Super', 'last_name' => 'Admin', 'phone_number' => '+923226983833', 'email' => 'syed.abbas@musharp.com', 'password' => bcrypt('12345678'), 'is_active' => 1, 'is_approved' => 1],
            ['id' => 2, 'first_name' => 'Admin', 'last_name' => 'Test', 'phone_number' => '+923456983833', 'email' => 'syed.abbas+1@musharp.com', 'password' => bcrypt('12345678'), 'is_active' => 1, 'is_approved' => 1],
            ['id' => 3, 'first_name' => 'User', 'last_name' => 'Test', 'phone_number' => '+923126983833', 'email' => 'syed.abbas+2@musharp.com', 'password' => bcrypt('12345678'), 'is_active' => 1, 'is_approved' => 1],
        ];
        DB::table('users')->insert($users);
    }
}
