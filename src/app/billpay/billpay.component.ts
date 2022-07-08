import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billpay',
  templateUrl: './billpay.component.html',
  styleUrls: ['./billpay.component.scss']
})
export class BillpayComponent implements OnInit {
  onHide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onHide = false;
  }
}
