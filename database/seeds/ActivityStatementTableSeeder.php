<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivityStatementTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activities = [
            ['id' => 1, 'statement' => 'login'],
            ['id' => 2, 'statement' => 'logout'],
            ['id' => 3, 'statement' => 'sign up'],
            ['id' => 4, 'statement' => 'email verified'],
            ['id' => 5, 'statement' => 'reset password email sent'],
            ['id' => 6, 'statement' => 'password reset successfully']
        ];
        DB::table('activity_statement')->insert($activities);
    }
}
