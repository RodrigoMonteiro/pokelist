import { Injectable } from '@angular/core';
import { dark, light, Theme } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    localStorage.setItem('theme', dark.name);
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    localStorage.setItem('theme', light.name);
    this.setActiveTheme(light);
  }

  setSavedTheme(): void {
    const activeTheme =
      localStorage.getItem('theme') === dark.name ? dark : light;
    this.setActiveTheme(activeTheme);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
