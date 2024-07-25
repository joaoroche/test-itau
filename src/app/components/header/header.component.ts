import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  selectedLanguage: string;
  optionsLanguage = this.languageService.getLanguages();


  constructor(private languageService: LanguageService, private translateService: TranslateService,
  ) {
    this.selectedLanguage = this.languageService.getLanguage();
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target?.value;
    if (!value) {
      return;
    }

    this.selectedLanguage = value;
    this.languageService.setLanguage(value);
    this.translateService.use(value);
  }
}
