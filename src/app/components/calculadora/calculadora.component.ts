import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public op1;
  public op2;
  public ret1;
  public ret2;
  public ShowM1;
  public ShowM2;
  public ShowM3;
  public ShowM4;
  public res;
  constructor() {
   }

  ngOnInit(): void {
  }

  suma() {
    if ( this.ShowM2 ) {
      this.ShowM2 = false;
    } else if (this.ShowM3) {
      this.ShowM3 = false;
    } else if (this.ShowM4) {
      this.ShowM4 = false;
    }
    this.res = this.op1 + this.op2;
    this.ret1 = this.op1;
    this.ret2 = this.op2;
    this.ShowM1 = true;


  }

  resta() {
    if ( this.ShowM1 ) {
      this.ShowM1 = false;
    } else if (this.ShowM3) {
      this.ShowM3 = false;
    } else if (this.ShowM4) {
      this.ShowM4 = false;
    }
    this.res = this.op1 - this.op2;
    this.ret1 = this.op1;
    this.ret2 = this.op2;
    this.ShowM2 = true;
  }

  mult() {
    if ( this.ShowM1 ) {
      this.ShowM1 = false;
    } else if (this.ShowM2) {
      this.ShowM2 = false;
    } else if (this.ShowM4) {
      this.ShowM4 = false;
    }
    this.res = this.op1 * this.op2;
    this.ret1 = this.op1;
    this.ret2 = this.op2;
    this.ShowM3 = true;
  }

  div() {
    if ( this.ShowM1 ) {
      this.ShowM1 = false;
    } else if (this.ShowM2) {
      this.ShowM2 = false;
    } else if (this.ShowM3) {
      this.ShowM3 = false;
    }
    this.res = this.op1 / this.op2;
    this.ret1 = this.op1;
    this.ret2 = this.op2;
    this.ShowM4 = true;
  }

}
