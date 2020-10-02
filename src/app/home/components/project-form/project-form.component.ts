import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/Project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project = new Project(1, '', '')

  constructor() { }

  ngOnInit(): void {
  }

  savePorject(){
    console.log(this.project)
    this.project = new Project(1, '', '')
  }

}
