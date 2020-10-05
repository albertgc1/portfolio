import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireAuth: AngularFireAuth ) {}

  authenticated(){
    return this.fireAuth.authState
  }

  register(data){
    return this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
  }

  login(data){
    return this.fireAuth.signInWithEmailAndPassword(data.email, data.password)
  }

  logout(){
    this.fireAuth.signOut()
  }

}
