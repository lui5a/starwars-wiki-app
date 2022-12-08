import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomeModule)},
  { path: 'films', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'planets', loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule) },
  { path: 'species', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule) },
  { path: 'starships', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule) },
  { path: 'vehicles', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
