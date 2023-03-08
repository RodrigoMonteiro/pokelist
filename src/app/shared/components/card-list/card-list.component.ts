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
  currentList =  this.pokemonListKanto;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getAllKantoPokemons();
    this.getAllJohtoPokemons();
    this.getAllHoennPokemons();
    this.getAllSinnohPokemons();
    this.getAllUnovaPokemons();
    this.getAllKalosPokemons();
    this.getAllAlolaPokemons();
    this.getAllGalarPokemons();
    this.getAllHisuiPokemons();
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
  }
  getAllJohtoPokemons() {
    this.pokemonService.loadJohtoPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllHoennPokemons() {
    this.pokemonService.loadHoennPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllSinnohPokemons() {
    this.pokemonService.loadSinnohPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllUnovaPokemons() {
    this.pokemonService.loadUnovaPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllKalosPokemons() {
    this.pokemonService.loadKalosPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllAlolaPokemons() {
    this.pokemonService.loadAlolaPokemons().subscribe((el) =>
      el.map((e: any) => {
        console.log(e)
        this.savePokemonInfo(e.url);
      })
      );
  }

  getAllGalarPokemons() {
    this.pokemonService.loadGalarPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
  }
  getAllHisuiPokemons() {
    this.pokemonService.loadHisuiPokemons().subscribe((el) =>
      el.map((e: any) => {
        this.savePokemonInfo(e.url);
      })
    );
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
    console.log(this.pokemonListAlola);
    this.selectedButton = 'Alola';
    this.pokemonListAlola.sort((a, b) => a.id - b.id);
    this.currentList = this.pokemonListAlola
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
