import { PokemonService } from './../../services/Pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemonNumber: number = 1;
  pokemonTitle: string = 'Bulbasaur';
  pokemonHeight: number = 7;
  pokemonWeight: number = 10;
  pokemonType: string[] = ['Grass', 'Poison'];
  pokemonNormalSprite: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
    pokemonShinySprite: string = ''

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): any {
    this.pokemonService.loadPokemonById(1).subscribe((e) => console.log(e));
  }
}
