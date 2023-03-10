import { regions } from '../../model/pokemonRegion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilServiceService {

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
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
