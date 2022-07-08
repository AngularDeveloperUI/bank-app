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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'accountNum': [null, [Validators.required, Validators.maxLength(12)]],
      'name': [null, Validators.required],
      'pin': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      'description': [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
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
    this.post = 'Payment Transfered Successful!';
  }

}