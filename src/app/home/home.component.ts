import { Component, OnInit } from '@angular/core';
import { projects } from './data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects

  constructor() {
    this.projects = projects
  }

  ngOnInit(): void {
    console.log(this.projects)
  }

}
