import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  userDetails;
  constructor(private router: Router, private service: UserService, public translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('pl');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
  }

  ngOnInit() {

  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
