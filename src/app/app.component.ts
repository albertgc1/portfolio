import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth: boolean = false
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.authenticated().subscribe(
      res => {
        if(res) this.auth = true
      }
    )
  }

}
