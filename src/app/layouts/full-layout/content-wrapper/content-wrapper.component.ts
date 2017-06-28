import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  breadcrumbs: Array<any>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        this.breadcrumbs = [];
        let currentRoute = this.route.root;
        let url = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(route => {
            if (route.outlet === 'primary') {
              const routeSnapshot = route.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              this.breadcrumbs.push({
                label: route.snapshot.data,
                url: url
              });
              currentRoute = route;
            }
          });
        } while (currentRoute);
      }
    );
  }
}
