import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitTableComponent } from './habit-table/habit-table.component';
import { HabitAddFormComponent } from './habit-add-form/habit-add-form.component';
import { HabitPageComponent } from './habit-page/habit-page.component';



@NgModule({
  declarations: [
    HabitTableComponent,
    HabitAddFormComponent,
    HabitPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitModule { }
