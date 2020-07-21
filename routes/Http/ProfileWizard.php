<?php

namespace Route\Http;


use App\Http\Controllers\ProfileSetupController;
use Illuminate\Support\Facades\Route;

class ProfileWizard
{
    static function routes()
    {
        Route::middleware(['auth'])->group(function () {

        });
    }
}
