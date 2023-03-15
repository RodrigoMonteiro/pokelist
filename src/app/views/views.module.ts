import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [PokemonInfoComponent, HomeComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [PokemonInfoComponent, HomeComponent],
})
export class ViewsModule {}
