import { AppService } from './../app.service';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  title = 'app-header';
  constructor(private appService: AppService, public route: ActivatedRoute, private router: Router) {

  }
  logout() {
    this.appService.logout();
    this.router.navigate(['login']);
  }
}
