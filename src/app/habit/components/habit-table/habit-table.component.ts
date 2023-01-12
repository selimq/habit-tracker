import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Habit} from "../../models/habit";
import {HabitService} from "../../services/habit.service";

@Component({
  selector: 'app-habit-table',
  templateUrl: './habit-table.component.html',
  styleUrls: ['./habit-table.component.css']
})
export class HabitTableComponent implements  OnInit{
  loading$: Observable<boolean>;
  habits$: Observable<Habit[]>;
  noResults$: Observable<boolean>;

  constructor(private service: HabitService) {
    this.loading$ = this.service.loading$;
    this.noResults$ = this.service.noResults$;
    this.habits$ = this.service.habits$;
  }
  ngOnInit() {

  }

  delete(habit: Habit) {
      this.service.delete(habit.id);
  }
  trackByFn(index: number, item: Habit) {
    return item.id;
  }
}
