import { matchUps } from './../../model/pokemonMatchups';
import { Pokemon } from './../../model/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './../../shared/services/Pokemon.service';
import { Component } from '@angular/core';
import { UtilServiceService } from 'src/app/shared/services/Util.service';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  private readonly BasePokemonImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  namePokemonFromURL: string = '';
  createArrayStats: any = [];
  strongAgainst: string[] = [];
  weakAgainst: string[] = [];
  pokemonFamily: any[] = [];

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.namePokemonFromURL = params['name'];
      this.getPokemonByName(this.namePokemonFromURL.toLowerCase());
    });
  }
  redirectToPokemonList(){
    this.router.navigate([''])
  }
  redirectPokemonInfoById(pokemonName: string) {
    this.router.navigate(['pokemon', pokemonName]);
  }
  getPokemonImageURL(pokemonId: string) {
    return `${this.BasePokemonImage}${pokemonId}.png`;
  }
  getPokemonByName(name: string) {
    this.pokemonService.loadPokemonByName(name.toLowerCase()).subscribe({
      next: ({ id, name, height, weight, types, sprites, stats }) => {
        this.createArrayStats = [];
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
        this.getMatchUp(this.pokemonInfo.type);
        this.pokemonService
          .getPokemonFamily(this.pokemonInfo.id)
          .subscribe((family) => {
            this.pokemonFamily = family;
            console.log('Family :', this.pokemonFamily);
          });
      },
      error: (err) => {
        console.error('Erro', err.status, 'Pokemon not found .. 😕');
      },
    });
  }
  getMatchUp(types: string[]): void {
    const type1MatchUp = matchUps[types[0]];

    if (types.length === 1) {
      this.weakAgainst = type1MatchUp.weakAgainst;
      this.strongAgainst = type1MatchUp.strongAgainst;
      return;
    }
    const type2MatchUp = matchUps[types[1]];
    const mergedMatchUp = {
      weakAgainst: [
        ...new Set([...type1MatchUp.weakAgainst, ...type2MatchUp.weakAgainst]),
      ],
      strongAgainst: [
        ...new Set([
          ...type1MatchUp.strongAgainst,
          ...type2MatchUp.strongAgainst,
        ]),
      ],
      resistanceAgainst: [
        ...new Set([
          ...type1MatchUp.resistanceAgainst,
          ...type2MatchUp.resistanceAgainst,
        ]),
      ],
    };

    mergedMatchUp.weakAgainst = mergedMatchUp.weakAgainst.filter(
      (type) => !mergedMatchUp.resistanceAgainst.includes(type)
    );

    mergedMatchUp.weakAgainst = mergedMatchUp.weakAgainst.filter(
      (type) => !mergedMatchUp.strongAgainst.includes(type)
    );
    mergedMatchUp.strongAgainst = mergedMatchUp.strongAgainst.filter(
      (type) => !mergedMatchUp.weakAgainst.includes(type)
    );

    this.weakAgainst = mergedMatchUp.weakAgainst;
    this.strongAgainst = mergedMatchUp.strongAgainst;

    console.log(mergedMatchUp);
  }
}
