import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ProjectService } from '../core/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects
  auth: boolean = false

  constructor(private projectService: ProjectService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.projectService.index().subscribe(
      res => this.projects = res
    )
    
    this.authService.authenticated().subscribe(
      res => {
        if(res) this.auth = true
        else this.auth = false
      }
    )
  }

}
