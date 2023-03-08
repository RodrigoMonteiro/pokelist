import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseAPI = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {}

  loadAllPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=1009`)
      .pipe(map((e) => e.results));
  }
  loadPokemonByName(name: string) {
    return this.httpClient.get<any>(`${this.baseAPI}${name}`);
  }
  getPokemonInformation(url: string) {
    return this.httpClient.get<any>(url);
  }
  loadKantoPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=151&offset=0`)
      .pipe(map((e) => e.results));
  }
  loadJohtoPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=100&offset=151`)
      .pipe(map((e) => e.results));
  }
  loadHoennPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=135&offset=251`)
      .pipe(map((e) => e.results));
  }
  loadSinnohPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=107&offset=386`)
      .pipe(map((e) => e.results));
  }
  loadUnovaPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=155&offset=494`)
      .pipe(map((e) => e.results));
  }
  loadKalosPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=155&offset=649`)
      .pipe(map((e) => e.results));
  }
  loadAlolaPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=88&offset=721`)
      .pipe(map((e) => e.results));
  }

  loadGalarPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=89&offset=809`)
      .pipe(map((e) => e.results));
  }
  loadHisuiPokemons() {
    return this.httpClient
      .get<any>(`${this.baseAPI}?limit=110&offset=898`)
      .pipe(map((e) => e.results));
  }
}
