import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result = '0';
  value: { active: boolean, value: string } = {active: true, value: '0'};

  NUMBERS = '0123456789';
  EQUAL = '=';

  buttons: string[][] = [
    ['AC', 'D', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['Theme', '0', ',', this.EQUAL]
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
}
