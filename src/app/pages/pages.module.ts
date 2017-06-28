import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';

import {P404Component} from './404/404.component';
import {P500Component} from './500/500.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
