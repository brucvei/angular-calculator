import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result = '0';
  value: { active: boolean, value: string } = {active: false, value: '0'};
  dialog = false;

  NUMBERS = '0123456789';
  OPERATORS = 'x÷+-';
  EQUAL = '=';
  THEME = 'Theme';
  AC = 'AC';
  ZERO = '0';
  D = 'D';
  PERCENT = '%';

  buttons: string[][] = [
    [this.AC,    this.D,  this.PERCENT, '÷'],
    ['7',        '8',     '9',          'x'],
    ['4',        '5',     '6',          '-'],
    ['1',        '2',     '3',          '+'],
    [this.THEME, '0',     ',',          this.EQUAL]
  ];

  themes: string[] = [
    'Light',
    'Dark'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  buttonColor(button: string): string {
    if (!this.NUMBERS.includes(button)) {
      switch (button) {
        case ',':
          return '';
        case this.EQUAL:
          return 'equal-button';
        default:
          return 'other-button';
      }
    }
    return '';
  }

  click(button: string) {
    switch (button) {
      case this.THEME:
        this.dialog = !this.dialog;
        break;
      case this.AC:
        this.result = '0';
        this.value = {active: false, value: '0'};
        break;
      case this.D:
        this.delete();
        break;
      case this.EQUAL:
        this.calculate();
        break;
      default:
        this.operation(button);
        break;
    }
  }

  private calculate() {
    if (this.result === this.ZERO) {
      return;
    } else if (this.result.length > 0) {
      console.log(this.result);
      // tslint:disable-next-line:no-eval
      this.result = eval(this.result);
      console.log(this.result);
      this.value = {active: true, value: this.result};
    }
  }

  private delete() {
    if (this.result === this.ZERO) {
      return;
    } else if (this.result.length > 0) {
      this.result = this.result.substring(0, this.result.length - 1);
      if (this.result.length === 0) {
        this.result = '0';
      }
    }
  }

  private operation(button: string) {
    this.result = this.result === '0' ? button : this.result + button;
  }
}
