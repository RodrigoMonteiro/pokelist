import { PokemonInfoComponent } from './views/pokemon-info/pokemon-info.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "" , component: CardListComponent},
  {path:"pokemon/:name", component: PokemonInfoComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
