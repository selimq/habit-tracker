import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email =  new FormControl('',[Validators.required, Validators.email]);
  password =   new FormControl('');
  name = new FormControl ('')

  constructor(private authService: AuthService) {

  }
  signUp() {
    console.log(this.email.value, this.password.value)
    this.authService.signUp(this.email.value!, this.password.value!,this.name.value!);
  }
}
