import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  userProfile() {
    this.router.navigateByUrl('/components/users/');
  }

  signOut() {
    this.router.navigateByUrl('/pages/login')
  }

}
