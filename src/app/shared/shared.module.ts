import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';
import { PokemonService } from './services/Pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SelectComponent,
    CardComponent,
    CardListComponent,
    CapitalizeFirstLetterPipe,
  ],
  imports: [HttpClientModule, CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    CardListComponent,
    CapitalizeFirstLetterPipe,
  ],
  providers: [PokemonService],
})
export class SharedModule {}
