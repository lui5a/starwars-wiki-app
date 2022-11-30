import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PeopleViewComponent } from './pages/people-view/people-view.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';


@NgModule({
  declarations: [
    PeopleListComponent,
    PersonDetailsComponent,
    PeopleViewComponent,
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
