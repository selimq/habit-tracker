import {Injectable} from '@angular/core';
import {HabitFirestoreService} from "./habit-firestore.service";
import {HabitPageStore} from "./habit-page.store";
import {map, Observable, tap} from "rxjs";
import {Habit} from "../models/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  constructor(private firestore: HabitFirestoreService, private store: HabitPageStore) {
    this.firestore.collection$().pipe(tap(data => {
      this.store.patch({
        loading: false, habits: data,
      }, 'data collection subs')
    })).subscribe()
  }

  get habits$(): Observable<Habit[]> {
    return this.store.state$.pipe(map(state => state.loading ? [] : state.habits));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading))
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => {
      return !state.loading && state.habits && state.habits.length === 0;
    }))
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  create(habit: Habit) {
    this.store.patch({
      loading: true, //! why - is really needed?
      habits: [], formStatus: 'Saving...'
    }, "habit create")
    return this.firestore.create(habit).then(_ => {
      this.store.patch({
        formStatus: 'Saved!'
      }, ' habit create SUCCESS')
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, "habit create timeout reset formStatus"), 2000)
    }).catch((() => {
      this.store.patch({
        loading: false, formStatus: 'An error ocurred'
      }, 'habit create ERROR')
    }))
  }

  update(habit:Partial<Habit>){
    return this.firestore.update(habit,habit.id!).then(_=> {
    })
  }

  delete(id: string): void {
    this.store.patch({loading: true, habits: []}, "habit delete");
    this.firestore.delete(id).catch(() => {
      this.store.patch({
        loading: false, formStatus: 'An error ocurred'
      }, 'habit delete ERROR')
    })
  }
}

