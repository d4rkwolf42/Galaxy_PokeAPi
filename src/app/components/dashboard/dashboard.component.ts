import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../models/IPokemon';
import { PokemonService } from '../../services/pokemon.service';
import * as Constantes from '../../Constantes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  pokemons: IPokemon[] = [];

  constructor(private _pokemonService: PokemonService){

  }
  ngOnInit():void{

    for (let index = 1; index <= Constantes.MAXIMO_EQUIPO; index++) {
      this._pokemonService.getPokemon(Math.floor(Math.random() * Constantes.NUMERO_MAXIMO_POKEMON) + 1).subscribe(pokemon => 
        {          
          this.pokemons.push(pokemon);
          console.log(pokemon);
        });       
    }    
  }
}
