import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/main/main.component';
import { PlanetDetailsComponent } from './planet-detail/planet-detail.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
      {
         path: '', component: PlanetViewComponent,
         children: [
          { path: 'planets-list', component: PlanetsListComponent },
          { path: 'planets-list/:id', component: PlanetDetailsComponent },
          {
            path: '',
            redirectTo: 'planets-list',
            pathMatch: 'full'
          }
         ]
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
