<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class LogViewerAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $is_dev = collect(Inertia::getShared('user_has_roles'))->flatten()->contains('1');

        if($is_dev) {
            return $next($request);
        }
        abort(403, 'Unauthorized access');
    }
}
