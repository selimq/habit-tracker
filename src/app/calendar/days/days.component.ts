import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {

     test: string[] = [];
     constructor() {
       console.log(
         moment().format('LLL')
       );

       var s = moment().startOf('week');


       for (let i = 0; i <7 ; i++) {
         this.test.push(s.format('LL'))
         s.add('days',1)
       }
     }
}
