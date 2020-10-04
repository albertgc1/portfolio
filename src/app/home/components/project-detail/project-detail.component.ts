import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {
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
