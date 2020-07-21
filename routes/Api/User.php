<?php


namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class User
{
    public static function register()
    {
        Route::resource('users', 'UserController');
        Route::post('/test_user', 'Test\TestController@testForm')->name('api.test');
    }
}
