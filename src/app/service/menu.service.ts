import { Injectable } from '@angular/core';
import {ChildMenu, Menu} from "../models/menu";

@Injectable()
export class MenuService {

  userMenus: Array<Menu> = [
    new Menu(1, 'Dashboard', [
      new ChildMenu(1, 'Dashboard', '/components/dashboard')
    ])
  ];

  adminMenus: Array<Menu> = [
    new Menu(1, 'Dashboard', [
      new ChildMenu(1, 'Dashboard', '/components/dashboard')
    ]),
    new Menu(2, 'Manage', [
      new ChildMenu(2, 'UserManage', '/components/users'),
      new ChildMenu(3, 'TaskManage', '/components/tasks')
    ])
  ];

  constructor() { }

}
