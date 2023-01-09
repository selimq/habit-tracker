import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysComponent } from './days/days.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    DaysComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    DaysComponent
  ]
})
export class CalendarModule { }
