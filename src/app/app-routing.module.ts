import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { BillpayComponent } from './billpay/billpay.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { CardsComponent } from './cards/cards.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { OffersComponent } from './offers/offers.component';
import { StatementsComponent } from './statements/statements.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'FundsTransfer', component: StatementsComponent,
    // children: [
    //   {
    //     path: 'Statement',
    //     component: StatementsComponent, pathMatch: 'full'
    //   }],
  },
  {
    path: 'BillPay&Recharge', component: BillpayComponent,
    children: [
      {
        path: 'BillPayment',
        component: BillpaymentComponent, pathMatch: 'full'
      }],

  },
  { path: 'Cards', component: CardsComponent },
  { path: 'MutualFunds', component: MutualFundsComponent },
  { path: 'MiniStatement', component: InsuranceComponent },
  { path: 'Loans', component: LoansComponent },
  { path: 'Offers', component: OffersComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/