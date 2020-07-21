<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GlobalSettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $globalSettings = [
            ['id' => 1, 'display_name' => 'Dev Email', 'field_name' => 'dev_email', 'value' => 'syed.abbas@musharp.com', 'value_type' => '0'],
        ];
        DB::table('global_settings')->insert($globalSettings);
    }
}
