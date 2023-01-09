import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HabitListComponent} from "./habits/habit-list/habit-list.component";
import {DaysComponent} from "./calendar/days/days.component";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/sign-up/sign-up.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {NonAuthGuard} from "./core/guard/non-auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'dashboard', component: DaysComponent ,canActivate: [AuthGuard]
  },
  {
    path:'habits', component:HabitListComponent, canActivate: [AuthGuard]
  },
  //Non Auth
  { path: 'sign-in', component: SignInComponent, canActivate: [NonAuthGuard]},
  { path: 'register-user', component: SignUpComponent,  canActivate: [NonAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
