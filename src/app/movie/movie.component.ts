import { Component, OnInit } from '@angular/core';
import { moviesInterface } from '../Actor';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:Array<moviesInterface> = this.miSearchService.getMovies();

  constructor(private miSearchService: SearchService) { }

  ngOnInit(): void {
  }

}
