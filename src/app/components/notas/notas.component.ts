import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  materias: string[];
  notas: number[];
  public Ms = false;
  constructor() { }

  ngOnInit(): void {
    this.materias = new Array();
    this.notas = new Array();
  }


  agregar(materia: string, nota: number) {
    if ( (nota >= 0) && (nota <= 100) ) {
    this.Ms = true;
    this.materias.push(materia);
    this.notas.push(nota);
    console.log(this.materias);
    console.log(this.notas);
    } else {
      alert('Ingresar notas de 0 a 100 puntos');
    }

  }

}
