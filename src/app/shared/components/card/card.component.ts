import { PokemonService } from './../../services/Pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemonNumber: number = 0;
  @Input() pokemonName: string = '';
  @Input() pokemonHeight: number = 0;
  @Input() pokemonWeight: number = 0;
  @Input() pokemonTypes: string[] = []
  @Input() pokemonNormalSprite: string ='';
  @Input() pokemonShinySprite: string ='';


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): any {
  }

  getPrimaryColor(primaryType :string[]){
   return primaryType[0]
  }
}
