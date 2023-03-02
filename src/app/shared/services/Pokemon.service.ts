import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private readonly baseAPI = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {}

  loadAllPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=1009`);
  }
  loadPokemonById(id: number) {
    return this.httpClient.get<any>(`${this.baseAPI}${id}`);
  }
  loadKantoPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=151&offset=0`);
  }
  loadJohtoPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=251&offset=152`);
  }
  loadHoennPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=386&offset=252`);
  }
  loadSinnohPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=493&offset=387`);
  }
  loadUnovaPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=649&offset=494`);
  }
  loadKalosPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=721&offset=650`);
  }
  loadAlolaPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=809&offset=722`);
  }

  loadGalarPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=898&offset=810`);
  }
  loadHisuiPokemons() {
    return this.httpClient.get<any>(`${this.baseAPI}?limit=1008offset=899`);
  }
}
