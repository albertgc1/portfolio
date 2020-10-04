import { Component, OnInit } from '@angular/core';
import { Project, tools } from 'src/app/core/models/Project';
import { ProjectService } from 'src/app/core/services/project.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project = new Project('', '')
  tools = tools
  tool: String
  photo: String = ''
  projectId: String

  constructor(private projectService: ProjectService, private angStorage: AngularFireStorage, private route: ActivatedRoute) {
    this.projectId = this.route.snapshot.params.project
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.projectId){
      this.saveProjectScreen()
    }else{
      this.savePorject()
    }
  }

  savePorject(){
    this.project.id = this.project.getUrl()
    this.project.photo = this.photo
    this.projectService.store({ ...this.project })
    this.project = new Project('', '')
  }

  saveProjectScreen(){
    delete this.project.tools
    this.project.id = this.project.getUrl()
    console.log(this.project)
    this.projectService.storeScreen(this.projectId, { ...this.project })
    this.project = new Project('', '')
  }

  uploadPhoto(e){
    const file = e.target.files[0]

    let task = this.angStorage.ref(`projects/${file.name}`).put(file)

    task.snapshotChanges().subscribe(
      res => {
        console.log((res.bytesTransferred / res.totalBytes) * 100)
      }
    )

    task.then(
      res => res.ref.getDownloadURL()
        .then(url => this.photo = url)
    )     
  }

}
