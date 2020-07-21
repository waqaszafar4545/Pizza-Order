<?php


namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class Test
{
    public static function register()
    {
        //Route::post('test_form', [TestController::class, 'testForm'])->name('test.form');
        Route::prefix('test_method')->group(function () {
            Route::post('/test_form', 'Test\TestController@testForm')->name('api.test');
        });
    }
}
