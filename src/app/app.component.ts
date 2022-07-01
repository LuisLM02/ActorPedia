import { Component } from '@angular/core';
import { moviesInterface } from './Actor';
import { ActorService } from './service/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public keyword = 'name';
  visibility = false;
  search:any = '';
  data = this.miActorsService.actors;
  movies:Array<moviesInterface> = [];

  constructor(private miActorsService: ActorService){}

  getSearchResult(){
    for (const actor of this.miActorsService.actors ) {
      if(actor.name === this.search){
        this.movies = actor.movies;
        this.visibility = true;
      }
    }
  }

  getSearchResultClick(name:string){
    this.search = name;
    for (const actor of this.miActorsService.actors ) {
      if(actor.name === this.search){
        this.movies = actor.movies;
        this.visibility = true;
      }
    }
  }
}
