import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {
  public num;
  public ret;
  public divisor;
  private contador;
  private prim;
  public ShowM1;
  public ShowM2;
  public esPrimo;

  constructor() { }

  ngOnInit(): void {

  }
  primo() {
  this.esPrimo = true;
  if (this.num < 2) {
    this.esPrimo = false;
  } else {
    for (let i = 2; i * i  <= this.num; i++) {
      if (this.num % i === 0) {
         this.esPrimo = false;
         break;
      }
    }
  }

  if (this.esPrimo) {
    this.ret = 'Es Primo';
    this.ShowM1 = true;
  } else {
    this.ret = 'No es primo';
    this.ShowM1 = true;
  }


}

}

