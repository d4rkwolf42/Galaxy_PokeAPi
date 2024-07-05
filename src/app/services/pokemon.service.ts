import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/IPokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { 

  }

  getPokemon(id: number):Observable<IPokemon> {
    return this.http.get(this.url.concat(id.toString()));
  } 
  
}
