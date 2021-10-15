import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input()
  hideSocialHeader: Boolean = false;

  constructor (private translateService: TranslateService) {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    const navbarMenu = document.getElementById('navbar-menu');
    if (navbarMenu!.classList.contains('is-active')) {
      navbarMenu!.classList.remove('is-active');
    } else {
      navbarMenu!.classList.add('is-active');
    }
  }

  toggleLanguage(): void {
    switch (this.translateService.currentLang) {
      case 'en':
        this.translateService.use('es');
        break;
      case 'es':
        this.translateService.use('en');
        break;
      default:
        break;
    }
  }
}
