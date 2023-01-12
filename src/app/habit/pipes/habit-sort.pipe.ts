import {Pipe} from "@angular/core";
import{ Habit }from'../models/habit';

@Pipe({
  name: "sort"
})

export class HabitSortPipe {
  transform(list: Array<Habit> | null) : Array<Habit> | any{
    console.log(list)
    if(list!=null){

      return list.sort((a,b) =>
         b.createdAt - a.createdAt
      )
    }

  }
}
