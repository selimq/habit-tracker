import {Component} from '@angular/core';
import * as moment from "moment";
import {Day} from "../models/day";
import {HabitService} from "../../habit/services/habit.service";
import {Habit} from "../../habit/models/habit";
@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css']
})

export class WeekdaysComponent {
  currentWeekList: Day[] = []
  habits: Habit[] = []

  constructor(private habitService: HabitService) {
    this.getHabits()
  }

  getHabits() {
    this.habitService.habits$.subscribe((data) => {
      console.log(data)
      if (data.length > 0 && this.habits.length == 0) {
        this.habits = data;
        if (this.currentWeekList.length == 0)
          this.fillTableWithCurrentWeekDays()
      }
    })

  }

  onCheckBoxClick(day: Day, habit: Habit) {
    console.log(day.date)
    console.log(this.habits)
    if(habit.days ==null){
      habit.days = []
      habit.days.push(day.date)
    }
    else {
      console.log(habit.days.filter(e=> e== day.date))
      if(habit.days.filter(e=> e== day.date).length != 0){
        habit.days  = habit.days.filter(e=> e !== day.date)
      }
      else {
      habit.days.push(day.date)
      }
    this.habitService.update(habit)
  }}

  isChecked(day: Day, habit: Habit):boolean{
 return  habit.days.filter(e=> e == day.date).length ==1 ;
  }

  fillTableWithCurrentWeekDays() {
    var startOfWeek = moment().startOf('week');
    for (let i = 0; i < 7; i++) {
      let day: Day = {
        id: i,
        name: startOfWeek.format('dddd'),
        date: startOfWeek
          .format('l')
      }
      this.currentWeekList.push(day)
      startOfWeek.add('days', 1)
    }
    console.table(this.currentWeekList)
  }
}
