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
    thirdCtrl: ['', Validators.required],
  });
  fourFormGroup = this._formBuilder.group({
    fourCtrl: ['', Validators.required],
    fifthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;


  ngOnInit(): void {
  }

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver,) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
}
