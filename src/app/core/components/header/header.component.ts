import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonAnimations } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    CommonAnimations.slideIn
  ]
})

export class HeaderComponent implements OnInit {

  @Input()
  hideSocialHeader: Boolean = false;

  isBurgerMenuOpen: Boolean = false;

  constructor (private translateService: TranslateService) {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
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
