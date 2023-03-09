import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemonNumber: number = 0;
  @Input() pokemonName: string = '';
  @Input() pokemonHeight: number = 0;
  @Input() pokemonWeight: number = 0;
  @Input() pokemonTypes: string[] = [];
  @Input() pokemonNormalSprite: string = '';
  @Input() pokemonShinySprite: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  getPrimaryType(primaryType: string[]) {
    return primaryType[0];
  }

  redirectPokemonInfo() {
    this.router.navigate(['pokemon', this.pokemonName], {
      relativeTo: this.route,
    });
  }
}
