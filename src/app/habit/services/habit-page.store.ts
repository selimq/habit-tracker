import {Injectable} from "@angular/core";
import {StoreService} from "../../core/services/store.service";
import {HabitPageState} from "../states/habit-page.state";

@Injectable({
  providedIn: 'root'
})

export class HabitPageStore extends StoreService<HabitPageState>{
  protected  store : string = 'habits-page';

  constructor() {
        super({
          loading:true,
          habits:[]
        })
  }
}
