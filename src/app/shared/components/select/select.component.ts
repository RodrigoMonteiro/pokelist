import { light } from './../../../styles/theme/theme';
import { ThemeService } from 'src/app/styles/theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  lightMode: boolean = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setSavedTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }

  toggleTheme(): void {
    this.themeService.isDarkTheme()
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }

}
