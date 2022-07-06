import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-app';
  flag: boolean = false;
  loginFlag(value: boolean) {
    this.flag = value;
  }
  logout(value: boolean) {
    this.flag = !value;
  }
}
