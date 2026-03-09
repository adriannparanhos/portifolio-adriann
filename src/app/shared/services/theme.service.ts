import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private isDarkMode = new BehaviorSubject<boolean>(true); 
  
  public isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      this.setTheme(isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  public toggleTheme(): void {
    this.setTheme(!this.isDarkMode.value);
  }

  private setTheme(isDark: boolean): void {
    this.isDarkMode.next(isDark);
    const themeValue = isDark ? 'dark' : 'light';
    
    localStorage.setItem(this.THEME_KEY, themeValue);
    
    if (isDark) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}