import { PokemonService } from './../../shared/services/Pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent {


  constructor(private pokemonService : PokemonService){}


}
