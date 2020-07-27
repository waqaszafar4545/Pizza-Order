<?php

namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class Product
{
    public static function register()
    {
        Route::middleware(['auth:sanctum'])->group(function () {
            Route::post('get_products', 'ProductController@getProducts')->name('get.products');
        });
    }
}
