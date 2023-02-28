import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SelectComponent } from './components/select/select.component';
@NgModule({
  declarations: [HeaderComponent, SidenavComponent, SelectComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, SidenavComponent],
})
export class SharedModule {}
