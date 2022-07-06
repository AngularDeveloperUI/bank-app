import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  accountNo: number;
  branch: string;
  name: string;
  availableBalance: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
const ELEMENT_DATA: PeriodicElement[] = [
  {accountNo: 5607123111, branch: 'Hyderabad, Telangana',  name: 'Super star Rajini Kanth', availableBalance: 25000},
];

const CURRENT_DATA: PeriodicElement[] = [
  {accountNo: 5607654321, branch: 'Amaravathi, Andhra Pradesh',  name: 'NT Ramarao', availableBalance: 15000},
];

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['accountNo', 'branch', 'name', 'availableBalance'];
  dataSource = ELEMENT_DATA;
  dataSourc = CURRENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}