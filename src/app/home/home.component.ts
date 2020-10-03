import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../core/services/project.service';
//import { projects } from './data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects

  constructor(private projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.projectService.index().subscribe(
      res => this.projects = res
    )
    //console.log(this.projects)
  }

}
