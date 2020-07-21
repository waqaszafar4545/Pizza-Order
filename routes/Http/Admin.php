<?php

namespace Route\Http;

use Illuminate\Support\Facades\Route;

class Admin
{

    public static function routes()
    {
        Route::prefix('admin')->middleware(['auth', 'admin'])->namespace('Admin')->group(function () {
            Route::get('dashboard', 'DashboardController@index');
        });
    }
}
