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
//  const ELEMENT_DATA: PeriodicElement[] = [
//   {cardNo: 12345542432, cardType: 'VISA PLAT MONEYBACK CARD DOM',  name: 'YS Jagan', unbilledBalance: 25000, availableCredit: 35000, statementBalance: 14600},
// ];

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
  userData:any;
  parsedData:any;
  cardsData:any;
  dataSource:any;
  dataSourc:any;
  ELEMENT_DATA:any;
  CURRENT_DATA:any;
    ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.cardsData = this.parsedData.cards
    this.ELEMENT_DATA = [this.cardsData[1]]
    console.log(this.ELEMENT_DATA,'card data')
    this.dataSource = this.ELEMENT_DATA;
    this.CURRENT_DATA= [
      {cardNo: 43414141443432, cardType: 'VISA PLAT MONEYBACK INTL',  name: this.parsedData.name, unbilledBalance: 0.00, availableCredit:100000, statementBalance: 0},
    ];
    this.dataSourc = this.CURRENT_DATA;
    
  }

}
