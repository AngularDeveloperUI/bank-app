import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  cardNo: number;
  cardType: string;
  name: string;
  unbilledBalance: number;
  availableCredit: number;
  statementBalance: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
 const ELEMENT_DATA: PeriodicElement[] = [
  {cardNo: 12345542432, cardType: 'VISA PLAT MONEYBACK CARD DOM',  name: 'YS Jagan', unbilledBalance: 25000, availableCredit: 35000, statementBalance: 14600},
];

const CURRENT_DATA: PeriodicElement[] = [
  {cardNo: 43414141443432, cardType: 'VISA PLAT MONEYBACK INTL',  name: 'YS Jagan', unbilledBalance: 0.00, availableCredit:100000, statementBalance: 0},
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  displayedColumns: string[] = ['cardNo', 'cardType', 'name', 'unbilledBalance', 'availableCredit', 'statementBalance'];
  dataSource = ELEMENT_DATA;
  dataSourc = CURRENT_DATA;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
