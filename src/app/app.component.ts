import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'habit-tracker';
  list : Observable< any []>;
  constructor(private db: AngularFirestore) {
    const ref = this.db.collection('items')
    this.list  = ref.valueChanges();
  }
  saveData(value: string){
     const ref = this.db.collection('items')
    this.list  = ref.valueChanges();
     ref.add({"test": value}).then(r =>console.log(r));
  }
}
