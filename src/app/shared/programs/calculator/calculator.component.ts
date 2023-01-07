import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  // Declare the variables for the component
  displayValue = '0';
  operator!: string;
  firstOperand!: number;
  waitingForSecondOperand = false;
  memory = 0;
  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  ngOnInit() {}

  clear() {
    this.displayValue = '0';
    this.operator = '';
    this.firstOperand = 0;
    this.waitingForSecondOperand = false;
  }

  memoryClear() {
    this.memory = 0;
  }

  memoryRecall() {
    this.displayValue = this.memory.toString();
  }

  memoryAdd() {
    this.memory += parseFloat(this.displayValue);
  }

  memorySubtract() {
    this.memory -= parseFloat(this.displayValue);
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
  }

  divide() {
    this.operator = '/';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
  }

  multiply() {
    this.operator = '*';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
  }
  subtract() {
    this.operator = '-';
    this.waitingForSecondOperand = true;
    this.firstOperand = parseFloat(this.displayValue);
  }
  squareRoot() {
    this.displayValue = Math.sqrt(parseFloat(this.displayValue)).toString();
  }

  sin() {
    this.displayValue = Math.sin(parseFloat(this.displayValue)).toString();
  }

  tan() {
    this.displayValue = Math.tan(parseFloat(this.displayValue)).toString();
  }

  cos() {
    this.displayValue = Math.cos(parseFloat(this.displayValue)).toString();
  }
  equals() {
    this.waitingForSecondOperand = true;
    const result = this.performCalculation(
      this.firstOperand,
      parseFloat(this.displayValue),
      this.operator
    );
    this.displayValue = result.toString();
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
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }
}
