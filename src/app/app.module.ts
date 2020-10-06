import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
