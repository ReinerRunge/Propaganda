import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service';

 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router: Router, private auth: AuthService) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log(route);
        
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
 
        return true;
 
    }
 
}