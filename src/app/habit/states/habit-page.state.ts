import {Habit} from "../models/habit";

export interface HabitPageState {
  loading: boolean;
  habits: Habit[];
  formStatus: string;
}
