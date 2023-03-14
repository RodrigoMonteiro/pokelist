export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy';

export interface PokemonTypes {
  [type: string]: {
    strongAgainst: PokemonType[];
    weakAgainst: PokemonType[];
    resistanceAgainst: PokemonType[];
  };
}

export const matchUps: PokemonTypes = {
  Normal: {
    strongAgainst: [],
    weakAgainst: ['Fighting'],
    resistanceAgainst: [],
  },
  Fire: {
    strongAgainst: ['Grass', 'Ice', 'Bug', 'Steel'],
    weakAgainst: ['Ground', 'Water', 'Rock'],
    resistanceAgainst: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
  },
  Water: {
    strongAgainst: ['Fire', 'Ground', 'Rock'],
    weakAgainst: ['Grass', 'Electric'],
    resistanceAgainst: ['Fire', 'Water', 'Ice', 'Steel', 'Ground'],
  },
  Electric: {
    strongAgainst: ['Water', 'Flying'],
    weakAgainst: ['Ground'],
    resistanceAgainst: ['Electric', 'Flying', 'Steel'],
  },
  Grass: {
    strongAgainst: ['Water', 'Ground', 'Rock'],
    weakAgainst: ['Fire', 'Poison', 'Flying', 'Bug', 'Ice'],
    resistanceAgainst: ['Water', 'Electric', 'Grass', 'Ground'],
  },
  Ice: {
    strongAgainst: ['Grass', 'Ground', 'Flying', 'Dragon'],
    weakAgainst: ['Fire', 'Rock', 'Fighting', 'Steel'],
    resistanceAgainst: ['Ice'],
  },
  Fighting: {
    strongAgainst: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'],
    weakAgainst: ['Flying', 'Psychic', 'Fairy'],
    resistanceAgainst: ['Bug', 'Rock', 'Dark'],
  },
  Poison: {
    strongAgainst: ['Grass', 'Fairy'],
    weakAgainst: ['Ground', 'Psychic'],
    resistanceAgainst: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
  },
  Ground: {
    strongAgainst: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'],
    weakAgainst: ['Grass', 'Water', 'Ice'],
    resistanceAgainst: ['Poison', 'Rock'],
  },
  Flying: {
    strongAgainst: ['Grass', 'Fighting', 'Bug'],
    weakAgainst: ['Electric', 'Rock', 'Rock'],
    resistanceAgainst: ['Grass', 'Fighting', 'Bug','Ground'],
  },
  Psychic: {
    strongAgainst: ['Fighting', 'Poison'],
    weakAgainst: ['Ghost', 'Dark', 'Bug'],
    resistanceAgainst: ['Fighting', 'Psychic'],
  },
  Bug: {
    strongAgainst: ['Grass', 'Psychic', 'Dark'],
    weakAgainst: ['Fire', 'Flying', 'Rock'],
    resistanceAgainst: ['Fighting', 'Grass'],
  },
  Rock: {
    strongAgainst: ['Fire', 'Ice', 'Flying', 'Bug'],
    weakAgainst: ['Fighting', 'Ground', 'Steel', 'Water', 'Grass'],
    resistanceAgainst: ['Normal', 'Fire', 'Poison', 'Flying'],
  },

  Ghost: {
    strongAgainst: ['Psychic', 'Ghost'],
    weakAgainst: ['Dark', 'Ghost'],
    resistanceAgainst: ['Poison', 'Bug'],
  },
  Dark: {
    strongAgainst: ['Psychic', 'Ghost'],
    weakAgainst: ['Fighting', 'Fairy', 'Bug'],
    resistanceAgainst: ['Ghost', 'Dark'],
  },

  Steel: {
    strongAgainst: ['Ice', 'Rock', 'Fairy'],
    weakAgainst: ['Fire', 'Fighting', 'Ground'],
    resistanceAgainst: [
      'Normal',
      'Grass',
      'Ice',
      'Flying',
      'Psychic',
      'Bug',
      'Rock',
      'Dragon',
      'Steel',
      'Fairy',
    ],
  },
  Dragon: {
    strongAgainst: ['Dragon'],
    weakAgainst: ['Ice', 'Dragon', 'Fairy'],
    resistanceAgainst: ['Fire', 'Water', 'Grass', 'Electric'],
  },
  Fairy: {
    strongAgainst: ['Fighting', 'Dragon', 'Dark'],
    weakAgainst: ['Poison', 'Steel'],
    resistanceAgainst: ['Fighting', 'Bug', 'Dragon', 'Dark'],
  },
};
