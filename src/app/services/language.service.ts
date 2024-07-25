import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language = 'pt-BR';
  private languages = [
    {
      value: 'pt-BR',
      label: 'PT',
    },
    {
      value: 'en-US',
      label: 'EN',
    },
  ];

  getLanguage(): string {
    return this.language;
  }

  setLanguage(language: string): void {
    this.language = language;
  }

  getLanguages(): { value: string; label: string }[] {
    return this.languages;
  }
}
