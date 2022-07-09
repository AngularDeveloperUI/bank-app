import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


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
  userData: any;
  parsedData: any;
  option: any;
  ELEMENT_DATA: any;
  dataSource: any;
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.ELEMENT_DATA = this.parsedData.miniStatement;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }
  actions = ['All','One Week', 'One Month', 'Three Months'];
  onChange(event: any) {
    if (event.value === 'One Week') {
      let date1 = new Date();
      let date2 = new Date();
      date1.setDate(date1.getDate() - 7);
      let fromDate = date2.toLocaleDateString();
      let toDate = date1.toLocaleDateString();
      this.filterData(fromDate, toDate)
    } else if (event.value === 'One Month') {
      let d = new Date();
      d.setMonth(d.getMonth() - 1);
      let date2 = new Date();
      let fromDate = date2.toLocaleDateString();
      let toDate = d.toLocaleDateString();
      this.filterData(fromDate, toDate);
    } else if (event.value === 'Three Months'){
      let d = new Date();
      d.setMonth(d.getMonth() - 3);
      let toDate = d.toLocaleDateString();
      let date2 = new Date();
      let fromDate = date2.toLocaleDateString();
      this.filterData(fromDate, toDate);
    } else {
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    }
  }

  filterData(startDate: any, endDate: any) {
    let filterArray: any[] = []
    this.ELEMENT_DATA.forEach((a: any) => {
      let d = new Date(a.date);
      let endDate1 = new Date(endDate);
      let startDate1 = new Date(startDate);
      if (d <= startDate1 && d >= endDate1) {
        filterArray.push(a)
      }
      this.dataSource = new MatTableDataSource(filterArray)
    });

  }

}
