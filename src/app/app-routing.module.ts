import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {AuthGuard} from "./authentication/guard/auth.guard";
import {NonAuthGuard} from "./authentication/guard/non-auth.guard";
import {BlankPageComponent} from "./shared/blank-page/blank-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  /*{
    path: 'dashboard', component: DaysComponent ,canActivate: [AuthGuard]
  },
  {
    path:'habits', component:HabitListComponent, canActivate: [AuthGuard]
  },*/
  //Non Auth
  { path: 'sign-in', component: SignInComponent, canActivate: [NonAuthGuard]},
  { path: 'register-user', component: SignUpComponent,  canActivate: [NonAuthGuard] },
  { path : '**', component: BlankPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
