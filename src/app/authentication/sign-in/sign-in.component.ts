import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email =  new FormControl('',[Validators.required, Validators.email]);
  password =   new FormControl('');

      constructor(private authService: AuthService) {

      }
      signIn() {
        console.log(this.email.value, this.password.value)
        this.authService.signIn(this.email.value!, this.password.value!);
      }
}
