import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
    private user: firebase.User;
    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
		        this.user = user;
        });
    }
     signInWithEmail(email: string, password: string) {
        console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    isAuthenticated(){
        if (!this.user){
            return false; 
        }

        return true;
    }
}
