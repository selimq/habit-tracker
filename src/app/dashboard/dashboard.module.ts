import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import { WeekdaysComponent } from './weekdays/weekdays.component';



@NgModule({
  declarations: [
    DashboardComponent,
    WeekdaysComponent
  ],
  imports: [
    CommonModule, SharedModule,CoreModule
  ]
})
export class DashboardModule { }
