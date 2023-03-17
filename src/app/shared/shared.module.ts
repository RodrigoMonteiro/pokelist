import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';
import { PokemonService } from './services/Pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { CapitalizeFirstLetterPipe } from './pipes/capitalizeFirstLetter/capitalize-first-letter.pipe';
import { TransformHeightPipe } from './pipes/transformHeight/transform-height.pipe';
import { TransformWeightPipe } from './pipes/transformWeight/transform-weight.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    CardComponent,
    CardListComponent,
    CapitalizeFirstLetterPipe,
    TransformHeightPipe,
    TransformWeightPipe,
  ],
  imports: [HttpClientModule, CommonModule, MaterialModule],
  exports: [
    HeaderComponent,
    CardComponent,
    CardListComponent,
    CapitalizeFirstLetterPipe,
    TransformHeightPipe,
    TransformWeightPipe,
  ],
  providers: [PokemonService],
})
export class SharedModule {}
