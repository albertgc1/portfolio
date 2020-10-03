import { Component, OnInit } from '@angular/core';
import { Project, tools } from 'src/app/core/models/Project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project = new Project('', '')
  tools = tools
  tool: String

  constructor() { }

  ngOnInit(): void {
    console.log(tools)
  }

  savePorject(){
    this.project.id = this.project.getUrl()
    console.log(this.project)
    this.project = new Project('', '')
  }

}
