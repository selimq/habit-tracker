import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import * as moment from "moment-timezone";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {BlankPageComponent} from './shared/blank-page/blank-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {SharedModule} from "./shared/shared.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {HabitModule} from "./habit/habit.module";
import {AuthService} from "./authentication/service/auth.service";

//An example for the load data before start
function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get("https://jsonplaceholder.typicode.com/posts/10")
    .pipe(
      tap(e => console.log(e))
    );
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //PAGES
    AuthenticationModule,
    HabitModule,
    //
    HttpClientModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    BlankPageComponent
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => () => authService.loadValue(),
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    moment.locale('tr-TR')
    moment.tz.setDefault('Europe/Istanbul')
  }
}
