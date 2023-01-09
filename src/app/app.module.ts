import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarModule} from "./calendar/calendar.module";
import * as moment from "moment-timezone";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductModule} from "./product/product.module";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {BlankPageComponent} from './blank-page/blank-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationModule} from "./authentication/authentication.module";


@NgModule({
  declarations: [
    AppComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    BrowserAnimationsModule,
    ProductModule,
    AuthenticationModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AppRoutingModule
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    moment.locale('tr-TR')
    moment.tz.setDefault('Europe/Istanbul')
  }
}
