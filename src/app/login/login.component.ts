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
   // sessionStorage.setItem("currentData", JSON.stringify({}));
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.commonService.getUserData().subscribe((data) => {
    //  // this.data = data;
    //   console.log(data,'data from service');
    // })

    this.data = [
      {
        "customerId": "123456",
        "password": "123456",
        "name": "Jagadeesh Jorepalli",
        "accountNum":"766866457812",
        "accounts":[{
           "accType":"Saving",
            "accountBalance": 300145
        },{
           "accType":"Current",
            "accountBalance": 300145
        }],
        "ifsCode": "RPBB000789",
        "branch": "Hyderabad, Telangana",
        "pin":"1234",
        "address": {
          "hNo": "1-24",
          "street": "Balaji street",
          "city": "Hyderabad",
          "district": "Hyderabad",
          "state": "Telanagana",
          "pinCode": "500019"
        },
     
     "cards": [
         {
             "cardType": "Debit",
             "cardNum": "7867567567698911",
             "cardPin": "1234"
         },{
           "cardType": "Credit",
             "cardNum": "6789327897998119",
             "cardPin": "1234",
             "cardStatus":'active',
             "unbilledBalance":25000,
             "availableCredit":35000,
             "statementBalance":14600  
         }
         ],
        "loans": [
          {
            "loanNo": "3425678",
            "loanAmount": "300000",
            "tenure": "60",
            "emi": "6659"
          },
          {
            "loanNo": "3426589",
            "loanAmount": "600000",
            "tenure": "60",
            "emi": "13045"
          }
        ],
        "offers": [],
        "miniStatement": [
          {
            "date": "2/6/2022",
            "amount": 2000,
            "status": "Credited",
            "narration": "EMI 12096 Chq S12096997120969978"
          },
          {
            "date": "2/6/2022",
            "amount": 7000,
            "status": "Debited",
            "narration": "UPI-BALLEPALLI MANOJK37@ybl-SBIN0087739"
          },
          {
            "date": "2/6/2022",
            "amount": 25000,
            "status": "Debited",
            "narration": "Madhu-paytmq50101utmzi"
          }
        ]
      },
      {
        "customerId": "654321",
        "password": "654321",
        "name": "Pathipati Rajesh",
        "accountNum":"766866457813",
         "accounts":[{
           "accType":"Saving",
            "accountBalance": 32321
        },{
           "accType":"Current",
            "accountBalance": 300145
        }],
        "ifsCode": "RPBB000789",
        "branch": "Nellore, Andhra Pradesh",
        "pin":"1234",
        "address": {
          "hNo": "1-24",
          "street": "Balaji street",
          "city": "Hyderabad",
          "district": "Hyderabad",
          "state": "Telanagana",
          "pinCode": "500019"
        },
         "cards": [
         {
             "cardType": "Debit",
             "cardNum": "0967567567698911",
             "cardPin": "1234"
         },{
           "cardType": "Credit",
             "cardNum": "3489327897998119",
             "cardPin": "1234",
             "cardStatus":'active',
             "unbilledBalance":25000,
             "availableCredit":35000,
             "statementBalance":14600  
         }
         ],
        "loans": [
          {
            "loanNo": "3425678",
            "loanAmount": "300000",
            "tenure": "60",
            "emi": "6659"
          },
          {
            "loanNo": "3426589",
            "loanAmount": "600000",
            "tenure": "60",
            "emi": "13045"
          }
        ],
        "offers": [],
        "miniStatement": [
          {
            "date": "2/6/2022",
            "amount": 7800,
            "status": "Credited",
            "narration": "paytmq50101utmzi"
          },
          {
            "date": "2/6/2022",
            "amount": 5400,
            "status": "Debited",
            "narration": "Madhu-paytm"
          },
          {
            "date": "2/6/2022",
            "amount": 4300,
            "status": "Credited",
            "narration": "UPI-BALLEPALLI MANOJK37@ybl-SBIN0"
          }
        ]
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
   // this.loading = true;
    console.log(this.data);
    let currentData;
    this.data.forEach((element: userData) => {
      if (element.customerId === this.f.username.value &&
        element.password === this.f.password.value) {
        currentData = element;
        console.log(currentData,"current")
      }
    });
    console.log(currentData);
    if (currentData !== undefined) {
      console.log(currentData);
      //this.loading = false;
      this.loggedIn.emit(true);
      this.router.navigate(['/accounts']);
      sessionStorage.setItem("currentData", JSON.stringify(currentData));

    } else {
      alert('Please enter valid user name and password.')
      sessionStorage.setItem("currentData", JSON.stringify({}) );
    }
  }
}
