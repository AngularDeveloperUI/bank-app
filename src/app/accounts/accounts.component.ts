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

 

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['accountNo', 'branch', 'name', 'availableBalance'];
  ELEMENT_DATA:any
  CURRENT_DATA:any
  dataSource:any;
  dataSourc:any
  parsedData: any;
  constructor() { }
  userData: any;
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.ELEMENT_DATA = [
      { accountNo: this.parsedData.accountNum, branch: this.parsedData.branch, name: this.parsedData.name, availableBalance: this.parsedData.accounts[0].accountBalance },
    ];
    this.CURRENT_DATA = [
      { accountNo: this.parsedData.accountNum, branch: this.parsedData.branch, name: this.parsedData.name, availableBalance: this.parsedData.accounts[1].accountBalance },
    ];
    this.dataSource = this.ELEMENT_DATA;
  this.dataSourc = this.CURRENT_DATA;
  }


}