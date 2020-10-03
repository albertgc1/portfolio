import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private angFire: AngularFirestore) { }

  index(){
    return this.angFire.collection('projects').valueChanges()
  }

  store(project){
    this.angFire.collection("projects").doc(project.id).set(project)
  }

}
