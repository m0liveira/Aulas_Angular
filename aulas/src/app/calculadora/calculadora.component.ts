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
  result2: number = 0;

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

  reapeatCheck: boolean = false;
  numChecker: boolean = false;
  checker: boolean = false;
  operator: string = "";
  n1: string = "";
  n2: string = "";
  result: any = 0;

  doTheMath(): number | string {
    this.numChecker = false;
    this.reapeatCheck = false;
    switch (this.operator) {
      case "+":
        if (this.n2 == "0") {
          return this.result = this.n1;

        } else if (this.n1 == "0") {
          return this.result = this.n2;

        } else if (this.n1 != "0" && this.n2 != "0") {
          this.result = +this.n1 + +this.n2;
          if (this.checker) {
            this.numChecker = true;
            this.n1 = this.result;
          } else {
            this.n1 = "";
          }
          this.n2 = "";
          return this.result;
        }
        break;

      case "-":
        this.result = +this.n1 - +this.n2;
        if (this.checker) {
          this.n1 = this.result;
        } else {
          this.n1 = "";
        }
        this.n2 = "";
        return this.result;

      case "*":
        this.result = +this.n1 * +this.n2;
        if (this.checker) {
          this.n1 = this.result;
        } else {
          this.n1 = "";
        }
        this.n2 = "";
        return this.result;

      case "/":
        this.result = +this.n1 / +this.n2;
        if (this.checker) {
          this.n1 = this.result;
        } else {
          this.n1 = "";
        }
        this.n2 = "";
        return this.result;
        break;

      default:
        break;
    }
  }

  setNumber(x): string {
    if (!this.numChecker) {
      if (!this.reapeatCheck) {
        this.checker = false;
        if (!this.checker) {
          this.n1 = "";
          this.reapeatCheck = true;
        }
      }
      this.n1 += x;
      this.result = this.n1;
      return this.n1;

    } else {
      this.n2 += x;
      this.result = this.n2;
      return this.n2;
    }
  }

  setOperator(x): string {
    this.numChecker = true;
    this.checker = true;
    this.result = x;
    return this.operator = x;
  }

  clear(): any {
    this.result = 0;
    this.n1 = "";
    this.n2 = "";
    this.operator = "";
    this.numChecker = false;
    this.checker = false;
    this.reapeatCheck = false;
  }

  //#region numeros dos botoes + operadores
  setPlus(): string {
    return this.setOperator("+");
  }

  setMinus(): string {
    return this.setOperator("-");
  }

  setSplit(): string {
    return this.setOperator("/");
  }

  setMultiply(): string {
    return this.setOperator("*");
  }

  set0(): number | string {
    return this.setNumber(0);
  }

  set1(): number | string {
    return this.setNumber(1);
  }

  set2(): number | string {
    return this.setNumber(2);
  }

  set3(): number | string {
    return this.setNumber(3);
  }

  set4(): number | string {
    return this.setNumber(4);
  }

  set5(): number | string {
    return this.setNumber(5);
  }

  set6(): number | string {
    return this.setNumber(6);
  }

  set7(): number | string {
    return this.setNumber(7);
  }

  set8(): number | string {
    return this.setNumber(8);
  }

  set9(): number | string {
    return this.setNumber(9);
  }
  //#endregion

}
