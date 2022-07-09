import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  userData:any;
  parsedData:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.userData = sessionStorage.getItem('currentData')
    this.parsedData = JSON.parse(this.userData);
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'accountNum': [null, [Validators.required, Validators.maxLength(12),Validators.minLength(12)]],
      'name': [null, Validators.required],
      'pin': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      'amount': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
    });
  }


  get name() {
    return this.formGroup.get('name') as FormControl
  }



  getErrorEmail() {
    return this.formGroup.controls['accountNum'].hasError('required') ? 'Field is required' : '';
  }

  getErrorPassword() {
    return this.formGroup.controls['pin'].hasError('required') ? 'Field is required' : '';
  }
  
  onSubmit(post: any) {
    if(this.parsedData.pin === post.pin) {
    if(this.parsedData.accounts[0].accountBalance > post.amount) {
      var today = new Date();
            var year = today.getFullYear();
            var mes = today.getMonth() + 1;
            var dia = today.getDate();
            var fecha = mes + "/" + dia  + "/" + year;
      this.parsedData.accounts[0].accountBalance = this.parsedData.accounts[0].accountBalance - post.amount;
      this.parsedData.miniStatement.unshift({date: fecha,narration:`Transferred to ac no ${post.accountNum}`, amount: post.amount, status: 'Debited'})
      sessionStorage.setItem("currentData", JSON.stringify(this.parsedData));
      this.post = 'Payment Transfered Successful!';
    } else {
      alert('There is no sufficient Balnace to transfer');
    }
  } else {
    alert('Please Eneter Valid pin');
  }
    
  }

}