import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './_components';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers';

// used to create fake backend

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, AlertComponent, HomeComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
