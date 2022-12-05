import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule
  ]
})
export class ToDoModule { }
