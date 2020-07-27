<?php


namespace Route\Http;
use Illuminate\Support\Facades\Route;

class Test
{
    public static function routes()
    {
        Route::prefix('test_method')->group(function () {
            Route::get('/test', 'Test\TestController@testMethod')->name('testMethod');
        });

        Route::get('/test_products', 'ProductController@getProducts')->name('testProduct');

    }
}
