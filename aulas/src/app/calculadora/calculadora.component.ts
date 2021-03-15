import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1: number = 0;
  num2: number = 0;
  operation: string = "+";
  result: number = 0;



  quickOperation(): number {

    switch (this.operation) {
      case "+":
        if (this.num2 == 0) {
          return this.result = this.num1;

        } else if (this.num1 == 0) {
          return this.result = this.num2;

        } else if (this.num1 != 0 && this.num2 != 0) {
          return this.result = +this.num1 + +this.num2;
        }

        break;

      case "-":
        return this.result = this.num1 - this.num2;

      case "*":
        return this.result = this.num1 * this.num2;

      case "/":
        return this.result = this.num1 / this.num2;

        break;
      default:
        break;
    }
  }

  clearFieldOnClick(event): any {
    event.target.value = "";
    this.result = 0;
  }

}
