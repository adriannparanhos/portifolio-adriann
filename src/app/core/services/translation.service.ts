import { Injectable, signal, computed } from '@angular/core';
import { pt } from '../i18n/pt';
import { en } from '../i18n/en';

type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = signal<Language>((localStorage.getItem('portfolio_lang') as Language) || 'pt');

  public t = computed(() => this.currentLang() === 'pt' ? pt : en);

  public getActiveLang() {
    return this.currentLang.asReadonly();
  }

  public setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('portfolio_lang', lang); 
  }
}