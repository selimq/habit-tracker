import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitTableComponent } from './components/habit-table/habit-table.component';
import { HabitAddFormComponent } from './components/habit-add-form/habit-add-form.component';
import { HabitPageComponent } from './view/habit-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HabitSortPipe} from "./pipes/habit-sort.pipe";



@NgModule({
  declarations: [
    HabitSortPipe,
    HabitPageComponent ,
    HabitTableComponent,
    HabitAddFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [

  ]
})
export class HabitModule { }
