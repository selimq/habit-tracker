import { Injectable } from '@angular/core';
import {FirestoreService} from "../../core/services/firestore.service";
import {Habit} from "../models/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitFirestoreService extends FirestoreService<Habit> {
  protected basePath: string = 'habits'

}

