<?php

use Illuminate\Database\Seeder;
use  Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['title' => 'Pizza','created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Beverages','created_at' => Carbon::now()->format('Y-m-d H:i:s')]
        ];
        DB::table('categories')->insert($categories);
    }
}
