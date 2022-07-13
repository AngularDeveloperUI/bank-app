import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * @title Stepper responsive
 */
@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.scss']
})
export class BillpaymentComponent {
  favoriteSeason: string;
  seasons: string[] = ['Prepaid', 'Postpaid'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required,Validators.minLength(10),Validators.maxLength(10)],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    amount: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    cardNum: ['', Validators.required],
    password: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  userData: any;
  parsedData: any;
  cardsData: any;
  rechargeStatus: boolean;
  rechargedAmount: number;
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.cardsData = this.parsedData.cards
  }
  onPayment(form: any) {
    this.rechargedAmount = form.value.amount
  }
  onRecharge(form: any) {
    if(this.parsedData.accounts[0].accountBalance > this.rechargedAmount) {
    this.cardsData.forEach((element: any) => {
      if (form.value.cardNum === element.cardNum) {
        if (form.value.password === element.cardPin) {
          this.rechargeStatus = true
          if (element.cardType === 'Debit') {
            var today = new Date();
            var year = today.getFullYear();
            var mes = today.getMonth() + 1;
            var dia = today.getDate();
            var fecha = mes + "/" + dia  + "/" + year;
            this.parsedData.accounts[0].accountBalance = this.parsedData.accounts[0].accountBalance - this.rechargedAmount
            this.parsedData.accounts[1].accountBalance = this.parsedData.accounts[1].accountBalance - this.rechargedAmount
            this.parsedData.miniStatement.unshift({ date: fecha, narration: 'Mobile recharge ', amount: this.rechargedAmount, status: 'Debited' })
          } else {
            this.parsedData.cards[1].unbilledBalance = Number(this.parsedData.cards[1].unbilledBalance) + Number(this.rechargedAmount)
            this.parsedData.cards[1].availableCredit = this.parsedData.cards[1].availableCredit - this.rechargedAmount
          }
          sessionStorage.setItem("currentData", JSON.stringify(this.parsedData))
        } else {
          alert('Please enter Valid Pin....');
          this.rechargeStatus = false
        }
      }
    });
  } else {
    alert('Insufficient Balance')
  }
  }


}
