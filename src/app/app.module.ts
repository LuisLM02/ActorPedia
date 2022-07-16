import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppComponent } from './app.component';
import { ActorService } from './service/actor.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
