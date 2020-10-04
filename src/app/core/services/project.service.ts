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

  show(id){
    return this.angFire.collection('projects').doc(id).valueChanges()
  }

  store(project){
    this.angFire.collection("projects").doc(project.id).set(project)
  }

  storeScreen(projectId, screen){
    this.angFire.collection(`projects/${projectId}/screens`).doc(screen.id).set(screen)
  }

  indexScreens(projectId){
    return this.angFire.collection(`projects/${projectId}/screens`).valueChanges()
  }

}
