import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../shared/services/theme.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isDarkMode: boolean = true;
  public isMenuOpen = signal(false);
  public translationService = inject(TranslationService);
  
  public t = this.translationService.t;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  changeLanguage(lang: 'pt' | 'en') {
    this.translationService.setLanguage(lang);
    console.log(`Idioma alterado para: ${lang}`);
  }

  public toggleMenu(): void {
    this.isMenuOpen.update(state => !state);
  }

  public closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
