import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProjectService } from 'src/app/core/services/project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  id
  project
  currentProject
  screens = []
  auth: boolean = false
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private authService: AuthService) {
    this.id = this.route.snapshot.params.project
  }

  ngOnInit(): void {
    this.projectService.show(this.id).subscribe(
      project => {
        this.currentProject = project
        this.project = project
        this.getScreens(this.id)
      }
    )
    this.authService.authenticated().subscribe(
      res => {
        if(res) this.auth = true
        else this.auth = false
      }
    )
  }

  home(){
    this.project = this.currentProject
  }

  show(project){
    this.project = project
  }

  getScreens(id){
    this.projectService.indexScreens(id).subscribe(
      res => this.screens = res
    )
  }

}
