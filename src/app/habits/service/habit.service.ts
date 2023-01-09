import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private firestore: AngularFirestore) { }
}
