import { Component } from '@angular/core';
import * as moment from "moment";
export interface Day {
  day: string,
}
export interface Habit{
  isDone: boolean,
  updatedTime: string
}
@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  displayedColumns: string[] = ['day'];

     list: Day[] = [];
     constructor() {
       console.log(
         moment().format('LLL')
       );

       var s = moment().startOf('week');
       for (let i = 0; i <7 ; i++) {
         this.list.push( {
          day: s.format('LL')
         })
         s.add('days',1)
       }
     }
}
