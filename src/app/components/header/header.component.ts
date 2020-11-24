import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  peliculas:any[]=[
    {name : 'carne',
    img: 'assets/car.jpeg'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
