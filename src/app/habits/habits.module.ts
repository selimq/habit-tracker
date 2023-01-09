import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitListComponent } from './habit-list/habit-list.component';
import {Habit} from "./model/habit";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    HabitListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitsModule {
    list : Habit[] = []
    constructor() {
    }
}
