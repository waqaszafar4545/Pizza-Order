<?php


namespace Route\Api;

use \Illuminate\Support\Facades\Route;

class User
{
    public static function register()
    {
          Route::middleware('auth:sanctum')->post('/user', function (Request $request) {
            return $request->user();
        });
    }
}
