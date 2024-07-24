import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  selectedLanguage: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target?.value;
    if (!value) {
      return;
    }

    this.selectedLanguage = value;
    this.languageService.setLanguage(value);
  }
}
