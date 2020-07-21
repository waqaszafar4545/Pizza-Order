<?php

namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class Auth
{
    static function register()
    {
        Route::post('login', 'Auth\LoginController@login');
        Route::post('logout', 'Auth\LoginController@logout');
        Route::middleware('auth:airlock')->get('/user', function (Request $request) {
            return $request->user();
        });
        Route::prefix('app')->middleware('api')->group(function () {
            // Auth API
            Route::prefix('auth')->group(function () {
                Route::post('login', 'Auth\LoginController@login');
                Route::post('logout', 'AUth\LoginController@logout');
            });
        });
    }
}
