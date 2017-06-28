import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';

import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task/task.component';
import { UserComponent } from './user/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    DashboardComponent,
    TaskComponent,
    UserComponent
  ]
})
export class ComponentsModule { }
