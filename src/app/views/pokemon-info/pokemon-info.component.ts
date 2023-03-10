import { Pokemon } from './../../model/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from './../../shared/services/Pokemon.service';
import { Component } from '@angular/core';
import { UtilServiceService } from 'src/app/shared/services/Util.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  namePokemonFromURL: string = '';
  createArrayStats: any= [];
  strongerAgainst: string[] =[]
  weakerAgainst: string[] =[]

  pokemonInfo: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    type: [],
    normalSprite: '',
    shinySprite: '',
    region: '',
    stats: [],
  };

  constructor(
    private pokemonService: PokemonService,
    private utilService: UtilServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.namePokemonFromURL = params['name'];
      this.getPokemonByName(this.namePokemonFromURL.toLowerCase());
    });
  }

  getPokemonByName(name: string) {
    this.pokemonService.loadPokemonByName(name.toLowerCase()).subscribe({
      next: ({ id, name, height, weight, types, sprites, stats }) => {
        this.pokemonInfo = {
          id,
          name: this.utilService.capitalizeFirstLetter(name),
          height,
          weight,
          type: types.map((el: any) =>
            this.utilService.capitalizeFirstLetter(el.type.name)
          ),
          normalSprite: sprites.other['official-artwork'].front_default,
          shinySprite: sprites.other['official-artwork'].front_shiny,
          region: this.utilService.getPokemonRegion(id),
          stats: stats.map((el: any) => {
            const statObject = {
              ['name']: this.utilService.capitalizeFirstLetter(el.stat.name),
              ['value']: el.base_stat,
            };
            this.createArrayStats.push(statObject);
          }),
        };

      },
      error: (err) => {
        console.error('Erro', err.status, 'Pokemon not found .. 😕');
      },
    });
  }
  getTypesStrongerAgainst(types: string){

  }
  getTypesWeakerAgainst(types: string){

  }
}
