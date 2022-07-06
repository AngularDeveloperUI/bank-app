import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Output, EventEmitter } from '@angular/core';
import { userData } from '../interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<boolean>();

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  hide = true;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
  ) {
    // redirect to home if already logged in
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.commonService.getUserData().subscribe((data) => {
    //   this.data = data;
    //   console.log(data);
    // })
    this.data = [
      {
        "customerId": "123456",
        "password": "12345678"
      },
      {
        "customerId": "rajapathipati@gmail.com",
        "password": "12345678"
      }
    ];
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.f.username.value, this.f.password.value)

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.data);
    let currentData = {};
    this.data.forEach((element: userData) => {
      if (element.customerId === this.f.username.value &&
        element.password === this.f.password.value) {
        currentData = element;
      }
    });
    console.log(currentData);
    if (currentData !== {}) {
      this.loading = false;
      this.loggedIn.emit(true);
      this.router.navigate(['/accounts']);
    }
  }
}
