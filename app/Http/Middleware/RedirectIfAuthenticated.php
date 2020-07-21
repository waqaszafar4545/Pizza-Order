<?php

namespace App\Http\Middleware;

use App\Http\Traits\ApiResponse;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    use ApiResponse;
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            if($request->wantsJson()){
                return $this->error('Already, logged-in');
            }
            return redirect(RouteServiceProvider::HOME);
        }

        return $next($request);
    }
}
