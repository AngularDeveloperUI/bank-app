import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutual-funds',
  templateUrl: './mutual-funds.component.html',
  styleUrls: ['./mutual-funds.component.scss']
})
export class MutualFundsComponent implements OnInit {
  items = ['Set Investment Goals', 'Invest Smartly'];
  expandedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
