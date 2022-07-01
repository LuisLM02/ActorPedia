import { Component } from '@angular/core';
import { Actor, moviesInterface } from './Actor';
import { ActorService } from './service/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  keyword:string = 'name';
  search:string = '';
  data:Array<Actor> = this.miActorsService.getActors();
  movies:Array<moviesInterface> = [];

  constructor(private miActorsService: ActorService){}

  getSearchResult(){
    this.movies = this.miActorsService.searchActors(this.search);
  }

  getSearchResultClick(search:string){
    this.movies = this.miActorsService.searchActors(search);
  }

  getSearchResultItem(item:Actor){
    this.movies = this.miActorsService.searchActors(item.name);
  }
}
