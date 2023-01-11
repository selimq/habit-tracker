import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class SharedModule { }
