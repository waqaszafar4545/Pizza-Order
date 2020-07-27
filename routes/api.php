<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Route\Api\Auth;
use Route\Api\Test;
use Route\Api\User;
use Route\Api\Product;
use Route\Api\Order;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:airlock')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*Route::middleware('auth:airlock')->get('/user', function (Request $request) {
    return $request->user();
});*/
//App Authentication related routes
Auth::register();
Test::register();
User::register();
Product::register();
Order::register();
