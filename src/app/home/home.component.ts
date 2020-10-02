import { Component, OnInit } from '@angular/core';
import { Project } from '../core/models/Project'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  project = new Project(1, '', '')

  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.project)
  }

}
