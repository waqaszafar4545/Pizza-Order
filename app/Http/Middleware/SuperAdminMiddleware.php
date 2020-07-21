<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class SuperAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $role_id = Auth::guard($guard)->user()->role_id;
        if (!(isset($role_id) && intval($role_id) == 1)) {
            return response()->json("You are not Super Admin");
            //return route('login');
        }
        return $next($request);
    }
}
