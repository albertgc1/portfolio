import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carusel',
  templateUrl: './img-carusel.component.html',
  styleUrls: ['./img-carusel.component.css']
})
export class ImgCaruselComponent implements OnInit {

  @Input() photos = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.photos)
  }

}
