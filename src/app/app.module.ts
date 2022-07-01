import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppComponent } from './app.component';
import { ActorService } from './service/actor.service';

@NgModule({
  declarations: [
    AppComponent,
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
