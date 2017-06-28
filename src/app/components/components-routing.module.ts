import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user/user.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {TaskComponent} from './task/task/task.component';
import {TaskListComponent} from './task/task-list/task-list.component';
import {TaskDetailsComponent} from './task/task-details/task-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
  },
  {
    path: 'users',
    component: UserComponent,
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        component: UserListComponent,
        data: {
          title: 'UserList'
        }
      },
      {
        path: ':id',
        component: UserDetailsComponent,
        data: {
          title: 'UserDetails'
        }
      }
    ]
  },
  {
    path: 'tasks',
    component: TaskComponent,
    data: {
      title: 'Tasks'
    },
    children: [
      {
        path: '',
        component: TaskListComponent,
        data: {
          title: 'TaskList'
        }
      },
      {
        path: ':id',
        component: TaskDetailsComponent,
        data: {
          title: 'TaskDetails'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ComponentsRoutingModule { }
