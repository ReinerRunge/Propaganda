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

    signInWithGoogle(){
        return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    signInWithFacebook(){
        return this.oauthSignIn(new firebase.auth.FacebookAuthProvider());
    }

    private oauthSignIn(provider: AuthProvider): Promise<any> {
        if (!(window).cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        } else {
            return this.afAuth.auth.signInWithRedirect(provider)
            .then(() => {
                return this.afAuth.auth.getRedirectResult().then( result => {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    let token = result.credential.providerId;
                    // The signed-in user info.
                    let user = result.user;
                    console.log(token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    }
    

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
      }

    get authenticated(): boolean {
        return this.user !== null;
      }

      getEmail() {
        return this.user && this.user.email;
      }

    isAuthenticated(){
        if (!this.user){
            return false; 
        }

        return true;
    }
}
