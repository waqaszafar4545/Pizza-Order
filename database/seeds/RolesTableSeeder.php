<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['id' => 1, 'name' => 'super admin'],
            ['id' => 2, 'name' => 'admin'],
            ['id' => 3, 'name' => 'user'],
        ];
        DB::table('roles')->insert($roles);
    }
}
