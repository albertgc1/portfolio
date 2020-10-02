import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/models/Project';
import { projects } from '../../data';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  title
  project
  projects = projects
  constructor(private route: ActivatedRoute) {
    this.title = this.getTitleFromUrl(this.route.snapshot.params.project)
    this.project = new Project('Social network with laravel and react', 'asd')
  }

  ngOnInit(): void {

  }

  getTitleFromUrl(url){
      let title = url.charAt(0).toUpperCase() + url.slice(1);
      return title.replace('-', ' ')
  }

}
