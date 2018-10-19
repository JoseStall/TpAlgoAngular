import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ROUTES } from './app.routes'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Exo1Component } from './comp/exo1/exo1.component';
import { Exo2Component } from './comp/exo2/exo2.component';
import { Exo3Component } from './comp/exo3/exo3.component';
import { Exo4Component } from './comp/exo4/exo4.component';
import { Exo5Component } from './comp/exo5/exo5.component';
import { LoginComponent } from './views/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    Exo5Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ],
  providers: [
  AuthenticationService,
  StorageService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
