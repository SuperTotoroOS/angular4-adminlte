import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../service/menu.service";
import {Router} from "@angular/router";
import {ChildMenu, Menu} from "../../../models/menu";

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  menus: Array<Menu>;
  currentMenuId = 1;

  constructor(public router: Router, public menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.adminMenus;
  }

  nav(childMenu: ChildMenu) {
    const link = childMenu.link;
    this.router.navigateByUrl(link);
  }

}
