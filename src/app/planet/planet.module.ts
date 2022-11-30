import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { PlanetDetailsComponent } from './planet-detail/planet-detail.component';


@NgModule({
  declarations: [
    PlanetsListComponent,
    PlanetViewComponent,
    PlanetDetailsComponent
  ],
  imports: [
    CommonModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
