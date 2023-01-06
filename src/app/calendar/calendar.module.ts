import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysComponent } from './days/days.component';



@NgModule({
  declarations: [
    DaysComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DaysComponent
  ]
})
export class CalendarModule { }
