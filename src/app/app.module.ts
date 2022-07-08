import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { BillpayComponent } from './billpay/billpay.component';
import { CardsComponent } from './cards/cards.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoansComponent } from './loans/loans.component';
import { OffersComponent } from './offers/offers.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { StatementsComponent } from './statements/statements.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrimaryNavComponent,
    HeaderComponent,
    FooterComponent,
    AccountsComponent,
    FundTransferComponent,
    BillpayComponent,
    CardsComponent,
    MutualFundsComponent,
    InsuranceComponent,
    LoansComponent,
    OffersComponent,
    LeftNavComponent,
    BillpaymentComponent,
    StatementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
