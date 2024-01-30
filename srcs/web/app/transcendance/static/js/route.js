import { home } from './home.js';
import { pong3D } from './pong.js';
import { shooter } from './shooter.js';

export function route()
{
    const pathname = window.location.pathname;

	console.log(pathname);
    if (pathname === '/')
        home();
    else if (pathname === '/home/')
        home();
    else if (pathname === '/pong/')
        pong3D();
    else if (pathname === '/shooter/')
        shooter();
    else
        home();
}
