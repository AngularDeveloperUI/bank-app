import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.scss']
})
export class FundTransferComponent implements OnInit {
  onHide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.onHide = false;
  }
}
