import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "./user";
import {Router} from "@angular/router";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(public firestore: AngularFirestore, public auth: AngularFireAuth, public router: Router) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  setUserData(user: any, name?: string) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    void userRef.set({...userData, lastLoginAt:Date()},{
      merge:true
    });
  }
  signIn(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.setUserData(result.user);
      this.auth.authState.subscribe((user) => {
        if (user) {
          void this.router.navigate(['dashboard']);
        }
      })

    }).catch(this.handleError)
  }

  signUp(email: string, password: string, name: string): void {
    this.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.sendVerificationMail();
      this.setUserData(result.user, name);
    }).catch(this.handleError)
  }


  authLogin(provider: any): void {
    this.auth.signInWithPopup(provider)
      .then((result) => {
        void this.router.navigate(['']);
        this.setUserData(result.user);
      }).catch(this.handleError)
  }

  get isLoggedIn(): boolean {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user !== null && user.emailVerified !== false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  private sendVerificationMail(): void {
    this.auth.currentUser.then((user) => {
      console.log("sending");
      console.log(user)
      user?.sendEmailVerification();
    }).then(() => {
      window.alert('verification email sent');
    })
  }

  logOut() {
    this.auth.signOut().then(() => {
      this.userData = undefined;
      localStorage.removeItem('user');
      void this.router.navigate(['sign-in']);
    }).catch(this.handleError)
  }

  private handleError(error: any): void {
    window.alert(error.message)
  }
}
