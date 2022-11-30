import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PeopleModule } from './people/people.module';
import { PlanetModule } from './planet/planet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PeopleModule,
    PlanetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }