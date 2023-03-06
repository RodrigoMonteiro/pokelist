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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getAllPokemons();
  }

  savePokemonInfo(url: string) {
    this.pokemonService.getPokemonInformation(url).subscribe((e) => {
      const newPokemon = {
        id: e.id,
        name: e.name,
        height: e.height,
        weight: e.weight,
        type: e.types,
        normalSprite: e.sprites.other['official-artwork'].front_default,
        shinySprite: e.sprites.other['official-artwork'].front_shiny,
        region: this.getPokemonRegion(e.id),
      };

      switch (newPokemon.region) {
        case 'Kanto':
          this.pokemonListKanto.push(newPokemon);
          break;
        case 'Johto':
          this.pokemonListJohto.push(newPokemon);
          break;
        case 'Hoenn':
          this.pokemonListHoenn.push(newPokemon);
          break;
        case 'Sinnoh':
          this.pokemonListSinnoh.push(newPokemon);
          break;
        case 'Unova':
          this.pokemonListUnova.push(newPokemon);
          break;
        case 'Kalos':
          this.pokemonListKalos.push(newPokemon);
          break;
        case 'Alola':
          this.pokemonListAlola.push(newPokemon);
          break;
        case 'Galar':
          this.pokemonListGalar.push(newPokemon);
          break;
        case 'Hisui':
          this.pokemonListHisui.push(newPokemon);
          break;
      }
    });
  }
  getAllPokemons() {
    this.pokemonService.loadAllPokemons();
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

  getAllKantoPokemons() {
    this.pokemonService.loadKantoPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListKanto);
  }
  getAllJohtoPokemons() {
    this.pokemonService.loadJohtoPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListJohto);
  }
  getAllHoennPokemons() {
    this.pokemonService.loadHoennPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListHoenn);
  }
  getAllSinnohPokemons() {
    this.pokemonService.loadSinnohPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListSinnoh);
  }
  getAllUnovaPokemons() {
    this.pokemonService.loadUnovaPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListUnova);
  }
  getAllKalosPokemons() {
    this.pokemonService.loadKalosPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListKalos);
  }
  getAllAlolaPokemons() {
    this.pokemonService.loadAlolaPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListAlola);
  }

  getAllGalarPokemons() {
    this.pokemonService.loadGalarPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListGalar);
  }
  getAllHisuiPokemons() {
    this.pokemonService.loadHisuiPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
    console.log(this.pokemonListHisui);
  }
}
