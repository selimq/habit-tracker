import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HabitService} from "../../services/habit.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-habit-add-form',
  templateUrl: './habit-add-form.component.html',
  styleUrls: ['./habit-add-form.component.css']
})
export class HabitAddFormComponent {
    form : FormGroup = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-z]+$')])
    })

    status$: Observable<string>;
    constructor(private service: HabitService) {
        this.status$ = this.service.formStatus$;
    }
  isInvalid(name: string) {
    return this.form.controls[name].invalid
      && (this.form.controls[name].dirty || this.form.controls[name].touched)
  }

  async submit(){
      this.form.disable();
      await this.service.create({...this.form.value,createdAt:Date.now()});
      this.form.reset();
      this.form.enable();
  }
}
