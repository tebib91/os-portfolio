import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  // Declare the variables for the component
  displayValue = '0';
  operator = '';
  firstOperand = 0;
  secondOperand!: number;
  waitingForSecondOperand = false;
  memory = 0;
  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  operations: string[] = [];

  clear() {
    this.displayValue = '0';
    this.operator = '';
    this.firstOperand = 0;
    this.waitingForSecondOperand = false;
    this.operations = []; // clear the operations
  }

  enterNumber(num: number) {
    if (this.waitingForSecondOperand) {
      this.displayValue = '';
      this.waitingForSecondOperand = false;
    }
    this.displayValue =
      this.displayValue === '0'
        ? num.toString()
        : this.displayValue + num.toString();
    if (this.waitingForSecondOperand) {
      this.operations.push(this.displayValue);
    }
  }

  enterDecimal() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  add() {
    this.operator = '+';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
    this.operations.push(`${this.displayValue} ${this.operator}`);
  }

  divide() {
    this.operator = '/';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
    this.operations.push(`${this.displayValue} ${this.operator}`);
  }

  multiply() {
    this.operator = '*';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
    this.operations.push(`${this.displayValue} ${this.operator}`);
  }

  subtract() {
    this.operator = '-';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
    this.operations.push(`${this.displayValue} ${this.operator}`);
  }

  squareRoot() {
    this.displayValue = Math.sqrt(parseFloat(this.displayValue)).toString();
    this.operations.push(`√${this.firstOperand} = ${this.displayValue}`);
  }

  equals() {
    this.waitingForSecondOperand = true;
    const result = this.performCalculation(
      this.firstOperand,
      parseFloat(this.displayValue),
      this.operator
    );
    this.displayValue = result.toString();
    this.operations.push(`= ${this.displayValue}`);
  }

  performCalculation(
    firstOperand: number,
    secondOperand: number,
    operator: string
  ): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        // Prevent division by zero
        if (secondOperand !== 0) {
          return firstOperand / secondOperand;
        } else {
          return NaN;
        }
      default:
        return secondOperand;
    }
  }
}
