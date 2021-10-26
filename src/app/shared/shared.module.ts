import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonAnimations } from './animations/common-animations';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  TranslatePipe,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextareAutoresizeDirective } from './directives/textare-autoresize.directive';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [TextareAutoresizeDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule, TranslatePipe, TextareAutoresizeDirective],
})
export class SharedModule {
  availableLang = ['en', 'es'];
  trans!: TranslateService;

  constructor(public translateService: TranslateService) {
    // default language
    var lang = 'en';

    const navLang = window.navigator.language.substring(0, 2);

    if (this.availableLang.includes(navLang)) {
      lang = navLang;
    }

    translateService.addLangs(this.availableLang);
    translateService.setDefaultLang(lang);
    translateService.use(lang);
  }
}

export * from './animations/common-animations';
