import { Component } from '@angular/core';
import { moviesInterface } from './Actor';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  movies:Array<moviesInterface> = [];

  constructor(private miSearchService: SearchService){}

  updateMovies() : void{
    this.movies = this.miSearchService.getMovies();
  }
}
