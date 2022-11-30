import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/main/main.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleViewComponent } from './pages/people-view/people-view.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
           path: '', component: PeopleViewComponent,
           children: [
            { path: 'people-list', component: PeopleListComponent },
            { path: 'person-details', component: PersonDetailsComponent },
            {
              path: '',
              redirectTo: 'people-list',
              pathMatch: 'full'
            }
           ]
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
