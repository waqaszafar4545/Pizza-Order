<?php

namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class Order
{
    public static function register()
    {
        Route::middleware(['auth:sanctum'])->group(function () {
            Route::post('create_order', 'OrderController@create')->name('create.order');
        });
    }
}
