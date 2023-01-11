import {NgModule} from '@angular/core';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  exports : [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule
  ],

})
export class AuthenticationModule {
}
