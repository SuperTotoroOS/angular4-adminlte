import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/components/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './components/components.module#ComponentsModule',
        data: {
          title: 'Components'
        }
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
        data: {
          title: 'Pages'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})], // 使用了HashLocationStrategy策略，需要在首页配置<base href="/">，如果使用了HashLocationStrategy，需要在服务端进行重定向
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
