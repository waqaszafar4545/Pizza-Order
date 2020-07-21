<?php

namespace Route\Api;

use App\Http\Controllers\Test\TestController;
use \Illuminate\Support\Facades\Route;

class App
{
    static function register()
    {
        Route::post('test_form', [TestController::class, 'testForm'])->name('test.form');
    }
}
