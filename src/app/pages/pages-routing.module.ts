import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {P404Component} from './404/404.component';
import {P500Component} from './500/500.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: '404Page'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: '500Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'LoginPage'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'RegisterPage'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
