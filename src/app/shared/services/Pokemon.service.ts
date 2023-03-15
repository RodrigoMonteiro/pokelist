import { UtilServiceService } from 'src/app/shared/services/Util.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseAPI = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilServiceService
  ) {}

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
  getPokemonFamily(pokemonId: number) {
    return this.httpClient.get<any>(`${this.baseAPI}${pokemonId}`).pipe(
      switchMap((pokemon) => {
        const speciesUrl = pokemon.species.url;
        return this.httpClient.get<any>(speciesUrl);
      }),
      switchMap((species) => {
        const evolutionChainUrl = species.evolution_chain.url;
        return this.httpClient.get<any>(evolutionChainUrl);
      }),
      map((evolutionChain) => {
        const family = [];
        let current = evolutionChain.chain;
        while (current) {
          let id =
            current.species.url.split('/')[
              current.species.url.split('/').length - 2
            ];
          console.log(
            'current name: ',
            current.species.name,
            'current id: ',
            id
          );
          family.push([current.species.name, id]);
          current = current.evolves_to[0];
        }
        return family;
      })
    );
  }
}
