import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  info: string;
  estadoInfo: boolean;

  constructor() { 
    this.info ='Estudiante de la Universidad Nacional de Cajamarca de la facultad de Ingenieria de la escuela de ingeniería de sistemas';
    this.estadoInfo = false;
  }

  ngOnInit(): void {
  }

  showInfo(){
    return this.estadoInfo = !this.estadoInfo;
  }
}
