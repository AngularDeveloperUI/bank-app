import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  narration: string;
  date: string;
  amount: number;
  credit: number;
  debit: number;
  status: string;
}

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  displayedColumns: string[] = ['date', 'narration', 'amount', 'status'];
  constructor() { }
  userData:any;
  parsedData:any;
  dataSource:any;
  ELEMENT_DATA:any;
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.ELEMENT_DATA = this.parsedData.miniStatement;
    this.dataSource = this.ELEMENT_DATA;
  }

}
