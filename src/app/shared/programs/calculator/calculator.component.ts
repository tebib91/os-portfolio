import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  standalone: false,
})
export class CalculatorComponent {
  equationDisplay = '';
  private currentNumber = '';
  private previousNumber = '';
  private operation = '';

  private keyboardMap: { [key: string]: string } = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '.': '.',
    '/': '/',
    '*': '*',
    '-': '-',
    '+': '+',
    Enter: '=',
    '=': '=',
    Backspace: 'C',
    Escape: 'C',
    c: 'C',
  };

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    if (this.keyboardMap[key] !== undefined) {
      this.buttonClick(this.keyboardMap[key]);
    }
  }

  buttonClick(val: string) {
    if (this.isNumber(val)) {
      this.numberClick(val);
    } else {
      this.operatorClick(val);
    }
    this.updateEquationDisplay();
  }

  private isNumber(val: string): boolean {
    return !isNaN(Number(val));
  }

  private numberClick(val: string): void {
    if (this.operation === '=') {
      this.operation = '';
      this.previousNumber = '';
      this.equationDisplay = '';
    }
    this.currentNumber += val;
  }

  private operatorClick(val: string): void {
    if (val === 'C') {
      this.clear();
      return;
    }

    if (this.currentNumber) {
      if (this.previousNumber && this.operation && this.operation !== '=') {
        this.calculate();
      }
      this.previousNumber = this.currentNumber;
      this.currentNumber = '';
    }

    if (val !== '=') {
      this.operation = val;
      this.equationDisplay += ` ${val}`;
    } else if (this.previousNumber && this.operation) {
      this.calculate();
      this.previousNumber = '';
      this.operation = '';
    }
  }

  private calculate(): void {
    let result: number;
    const currentNumber = Number(this.currentNumber);
    const previousNumber = Number(this.previousNumber);

    switch (this.operation) {
      case '+':
        result = previousNumber + currentNumber;
        break;
      case '-':
        result = previousNumber - currentNumber;
        break;
      case '*':
        result = previousNumber * currentNumber;
        break;
      case '/':
        result = previousNumber / currentNumber;
        break;
      default:
        return;
    }
    this.currentNumber = String(result);
    this.equationDisplay += ` = ${this.currentNumber}`;
  }

  private updateEquationDisplay(): void {
    if (this.operation !== '=') {
      this.equationDisplay = `${this.previousNumber} ${this.operation} ${this.currentNumber}`;
    } else {
      this.equationDisplay = this.currentNumber;
    }
    console.log(this.currentNumber);
  }

  private clear(): void {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operation = '';
    this.equationDisplay = '';
  }
}
