import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project

  constructor() {
    
  }

  ngOnInit(): void {
    this.project = new Project(this.project.title, this.project.description)
  }

}
