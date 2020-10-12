import { Component, OnInit } from '@angular/core';
import { Project, tools } from 'src/app/core/models/Project';
import { ProjectService } from 'src/app/core/services/project.service'
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';

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
  files: File[] = [];
  types = ["desk", "mobile"]

  constructor(private projectService: ProjectService, private angStorage: AngularFireStorage, private route: ActivatedRoute,
    private router: Router) {
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
    delete this.project.photos
    this.project.id = this.project.getUrl()
    this.project.photo = this.photo
    this.projectService.store({ ...this.project })
    this.project = new Project('', '')
    this.router.navigate(['/'])
  }

  saveProjectScreen(){
    delete this.project.tools
    delete this.project.photo
    delete this.project.type
    this.project.id = this.project.getUrl()
    this.projectService.storeScreen(this.projectId, { ...this.project })
    this.project = new Project('', '')
    this.router.navigate(['detail', this.projectId])
  }

  uploadPhoto(file){

    let task = this.angStorage.ref(`projects/${Date.now()}`).put(file)

    task.snapshotChanges().subscribe(
      res => {
        console.log((res.bytesTransferred / res.totalBytes) * 100)
      }
    )

    task.then(
      res => res.ref.getDownloadURL()
        .then(url => {    
          if(this.projectId){
            this.project.photos.push(url)
            console.log(this.project)
          }else{
            this.photo = url
          }
        })
    )
  }

  onSelect(event) {
    this.files.push(...event.addedFiles)
    this.uploadPhoto(event.addedFiles[0])
  }
  
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1)
  }

}
