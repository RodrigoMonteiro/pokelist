import { PokemonService } from './../../services/Pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemonNumber: number = 1;
  @Input() pokemonName: string = 'Bulbasaur'; //mocked for tests
  @Input() pokemonHeight: number = 7; //mocked for tests
  @Input() pokemonWeight: number = 10; //mocked for tests
  @Input() pokemonType: string[] = ['Grass', 'Poison']; //mocked for tests
  @Input() pokemonNormalSprite: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'; //mocked for tests
  @Input() pokemonShinySprite: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png'; //mocked for tests

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): any {
    //Test
    this.pokemonService.loadPokemonById(1).subscribe((e) => console.log(e));
  }
}
