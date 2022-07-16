import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from '../Actor';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() emitterMovie = new EventEmitter();

  keyword: string = 'name';
  search: string = '';
  data: Array<Actor> = this.miSearchService.getActors();

  constructor(private miSearchService: SearchService) { }

  ngOnInit(): void {
  }

  getSearchResult(): void {
    this.miSearchService.searchActors(this.search);
    this.emitterMovie.emit();
  }

  getSearchResultClick(search: string): void {
    this.miSearchService.searchActors(search);
    this.emitterMovie.emit();
  }

  getSearchResultItem(item: Actor): void {
    this.miSearchService.searchActors(item.name);
    this.emitterMovie.emit();
  }
}
