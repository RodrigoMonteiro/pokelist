import { Pokemon } from './../../../model/pokemon';
import { PokemonService } from './../../services/Pokemon.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UtilServiceService } from '../../services/Util.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  singlePokemon: Pokemon = {
    id: 0,
    name: '',
    type: [],
    normalSprite: '',
    region: '',
  };
  selectedButton: string = 'Kanto';
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

  constructor(
    private pokemonService: PokemonService,
    private utilService: UtilServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAllPokemons();
  }

  addPokemonByRegion(pokemon: Pokemon) {
    switch (pokemon.region) {
      case 'Kanto':
        if (!this.pokemonListKanto.find((p) => p.name === pokemon.name)) {
          this.pokemonListKanto.push(pokemon);
          this.pokemonListKanto.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Johto':
        if (!this.pokemonListJohto.find((p) => p.name === pokemon.name)) {
          this.pokemonListJohto.push(pokemon);
          this.pokemonListJohto.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Hoenn':
        if (!this.pokemonListHoenn.find((p) => p.name === pokemon.name)) {
          this.pokemonListHoenn.push(pokemon);
          this.pokemonListHoenn.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Sinnoh':
        if (!this.pokemonListSinnoh.find((p) => p.name === pokemon.name)) {
          this.pokemonListSinnoh.push(pokemon);
          this.pokemonListSinnoh.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Unova':
        if (!this.pokemonListUnova.find((p) => p.name === pokemon.name)) {
          this.pokemonListUnova.push(pokemon);
          this.pokemonListUnova.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Kalos':
        if (!this.pokemonListKalos.find((p) => p.name === pokemon.name)) {
          this.pokemonListKalos.push(pokemon);
          this.pokemonListKalos.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Alola':
        if (!this.pokemonListAlola.find((p) => p.name === pokemon.name)) {
          this.pokemonListAlola.push(pokemon);
          this.pokemonListAlola.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Galar':
        if (!this.pokemonListGalar.find((p) => p.name === pokemon.name)) {
          this.pokemonListGalar.push(pokemon);
          this.pokemonListGalar.sort((a, b) => a.id - b.id);
        }
        break;
      case 'Hisui':
        if (!this.pokemonListHisui.find((p) => p.name === pokemon.name)) {
          this.pokemonListHisui.push(pokemon);
          this.pokemonListHisui.sort((a, b) => a.id - b.id);
        }
        break;
    }
  }
  savePokemonInfo(url: string) {
    this.pokemonService.getPokemonInformation(url).subscribe((e) => {
      const newPokemon = {
        id: e.id,
        name: this.utilService.capitalizeFirstLetter(e.name),
        height: e.height,
        weight: e.weight,
        type: e.types.map((el: any) =>
          this.utilService.capitalizeFirstLetter(el.type.name)
        ),
        normalSprite: e.sprites.other['official-artwork'].front_default,
        shinySprite: e.sprites.other['official-artwork'].front_shiny,
        region: this.utilService.getPokemonRegion(e.id),
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

  getPokemonByName(name: string): void {
    this.pokemonService.loadPokemonByName(name.toLowerCase()).subscribe({
      next: ({ id, name, height, weight, types, sprites }) => {
        this.singlePokemon = {
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
        };
        this.currentList = [this.singlePokemon];
      },
      error: (err) => {
        if (err.status === 404) {
          this._snackBar.open(`Pokemon "${name}" not found .. 😕`, 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['custom-snackbar']
          });
        } else {
          console.error('Error', err.status, err.message);
        }
      },
    });
  }

  selectKantoRegion() {
    this.selectedButton = 'Kanto';
    this.currentList = this.pokemonListKanto;
  }
  selectJohtoRegion() {
    this.selectedButton = 'Johto';
    this.currentList = this.pokemonListJohto;
  }
  selectHoennRegion() {
    this.selectedButton = 'Hoenn';
    this.currentList = this.pokemonListHoenn;
  }
  selectSinnohRegion() {
    this.selectedButton = 'Sinnoh';
    this.currentList = this.pokemonListSinnoh;
  }
  selectUnovaRegion() {
    this.selectedButton = 'Unova';
    this.currentList = this.pokemonListUnova;
  }
  selectKalosRegion() {
    this.selectedButton = 'Kalos';
    this.currentList = this.pokemonListKalos;
  }
  selectAlolaRegion() {
    this.selectedButton = 'Alola';
    this.currentList = this.pokemonListAlola;
  }
  selectGalarRegion() {
    this.selectedButton = 'Galar';
    this.currentList = this.pokemonListGalar;
  }
  selectHisuiRegion() {
    this.selectedButton = 'Hisui';
    this.currentList = this.pokemonListHisui;
  }
}
