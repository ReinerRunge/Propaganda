import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service';

 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router: Router, private authService: AuthService) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log(route);
 
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
 
        return true;
 
    }
 
}