import { regions } from './../../../model/pokemonRegion';
import { Pokemon } from './../../../model/pokemon';
import { PokemonService } from './../../services/Pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  singlePokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    type: [],
    normalSprite: '',
    shinySprite: '',
    region: '',
  };
  selectedButton: string = 'Kanto';
  pokemonListAll: any[] = [];
  pokemonListKanto: Pokemon[] = [];
  pokemonListJohto: Pokemon[] = [];
  pokemonListHoenn: Pokemon[] = [];
  pokemonListSinnoh: Pokemon[] = [];
  pokemonListUnova: Pokemon[] = [];
  pokemonListKalos: Pokemon[] = [];
  pokemonListAlola: Pokemon[] = [];
  pokemonListGalar: Pokemon[] = [];
  pokemonListHisui: Pokemon[] = [];
  currentList = this.pokemonListKanto;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getAllPokemons();
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  addPokemonByRegion(pokemon: Pokemon) {
    switch (pokemon.region) {
      case 'Kanto':
        this.pokemonListKanto.push(pokemon);
        break;
      case 'Johto':
        this.pokemonListJohto.push(pokemon);
        break;
      case 'Hoenn':
        this.pokemonListHoenn.push(pokemon);
        break;
      case 'Sinnoh':
        this.pokemonListSinnoh.push(pokemon);
        break;
      case 'Unova':
        this.pokemonListUnova.push(pokemon);
        break;
      case 'Kalos':
        this.pokemonListKalos.push(pokemon);
        break;
      case 'Alola':
        this.pokemonListAlola.push(pokemon);
        break;
      case 'Galar':
        this.pokemonListGalar.push(pokemon);
        break;
      case 'Hisui':
        this.pokemonListHisui.push(pokemon);
        break;
    }
  }
  savePokemonInfo(url: string) {
    this.pokemonService.getPokemonInformation(url).subscribe((e) => {
      const newPokemon = {
        id: e.id,
        name: this.capitalizeFirstLetter(e.name),
        height: e.height,
        weight: e.weight,
        type: e.types.map((el: any) =>
          this.capitalizeFirstLetter(el.type.name)
        ),
        normalSprite: e.sprites.other['official-artwork'].front_default,
        shinySprite: e.sprites.other['official-artwork'].front_shiny,
        region: this.getPokemonRegion(e.id),
      };
      this.addPokemonByRegion(newPokemon);
    });
  }
  getAllPokemons() {
    this.pokemonService.loadKantoPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadJohtoPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadHoennPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadSinnohPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadUnovaPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadKalosPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadAlolaPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadGalarPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    this.pokemonService.loadHisuiPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getPokemonRegion(id: number) {
    const region = regions.find(
      (region) => id >= region.start && id <= region.end
    );

    if (region) {
      return region.name;
    } else {
      return 'Something went wrong...';
    }
  }
  getPokemonByName(name: string): void {
    this.pokemonService.loadPokemonByName(name.toLowerCase()).subscribe({
      next: ({ id, name, height, weight, types, sprites }) => {
        this.singlePokemon = {
          id,
          name: this.capitalizeFirstLetter(name),
          height,
          weight,
          type: types.map((el: any) =>
            this.capitalizeFirstLetter(el.type.name)
          ),
          normalSprite: sprites.other['official-artwork'].front_default,
          shinySprite: sprites.other['official-artwork'].front_shiny,
          region: this.getPokemonRegion(id),
        };
      },
      error: (err) => {
        console.error('Erro', err.status, 'Pokemon not found .. 😕');
      },
    });
  }

  selectKantoRegion() {
    this.selectedButton = 'Kanto';
    this.pokemonListKanto.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListKanto;
  }
  selectJohtoRegion() {
    this.selectedButton = 'Johto';
    this.pokemonListJohto.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListJohto;
  }
  selectHoennRegion() {
    this.selectedButton = 'Hoenn';
    this.pokemonListHoenn.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListHoenn;
  }
  selectSinnohRegion() {
    this.selectedButton = 'Sinnoh';
    this.pokemonListSinnoh.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListSinnoh;
  }
  selectUnovaRegion() {
    this.selectedButton = 'Unova';
    this.pokemonListUnova.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListUnova;
  }
  selectKalosRegion() {
    this.selectedButton = 'Kalos';
    this.pokemonListKalos.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListKalos;
  }
  selectAlolaRegion() {
    this.selectedButton = 'Alola';
    this.pokemonListAlola.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListAlola;
  }
  selectGalarRegion() {
    this.selectedButton = 'Galar';
    this.pokemonListGalar.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListGalar;
  }
  selectHisuiRegion() {
    this.selectedButton = 'Hisui';
    this.pokemonListHisui.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListHisui;
  }
}
