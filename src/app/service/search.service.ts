import { Injectable } from '@angular/core';
import { Actor, moviesInterface } from '../Actor';
import { ActorService } from './actor.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private actors:Array<Actor> = this.miActorsService.getActors();
  private moviesResult:Array<moviesInterface> = [];

  constructor(private miActorsService: ActorService) { }

  searchActors(search:string):void{
    search = search.replace( /(<([^>]+)>)/ig, '');

    for (const actor of this.actors ) {
      if(actor.name.toLocaleLowerCase() === search.toLocaleLowerCase()){
        this.moviesResult = actor.movies;
        return;
      }else{
        this.moviesResult = [];
      }
    }
  }

  getActors():Array<Actor>{
    return this.actors;
  }
  getMovies():Array<moviesInterface>{
    return this.moviesResult;
  }
}
