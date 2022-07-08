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
    firstCtrl: ['', Validators.required],
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
  userData:any;
  parsedData:any;
  cardsData:any;
  rechargeStatus:boolean;
  rechargedAmount:number;
  ngOnInit(): void {
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
    this.cardsData = this.parsedData.cards
  }
  onPayment(form:any){
    this.rechargedAmount = form.value.amount
  }
  onRecharge(form:any) {
    console.log(form.value);
    this.cardsData.forEach((element: any) => {
      if(form.value.cardNum === element.cardNum) {
        if(form.value.password === element.cardPin){
           this.rechargeStatus = true 
           if(element.cardType ==='Debit') {
           this.parsedData.accounts[0].accountBalance = this.parsedData.accounts[0].accountBalance-this.rechargedAmount
           this.parsedData.accounts[1].accountBalance = this.parsedData.accounts[1].accountBalance-this.rechargedAmount
           sessionStorage.setItem("currentData", JSON.stringify(this.parsedData))
           }
        } else{
          alert('Please enter Valid Pin....');
          this.rechargeStatus = false
        }
      }
    });
  }

  
}
