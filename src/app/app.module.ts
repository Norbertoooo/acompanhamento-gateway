import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './template/navbar/navbar.component';
import {FooterComponent} from './template/footer/footer.component';
import {PrincipalComponent} from './template/principal/principal.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CadastrarComponent} from './cadastrar/cadastrar.component';
import {JwtInterceptor} from './helpers';
import {ErrorInterceptor} from './helpers';
import { DashboardTerapeutaComponent } from './dashboard-terapeuta/dashboard-terapeuta.component';
import {AuthenticationService} from './helpers/authentication.service';
import { SobreProjetoComponent } from './sobre-projeto/sobre-projeto.component';
import {PacienteModalComponent} from './dashboard-terapeuta/paciente-modal/paciente-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FichaModalComponent} from './dashboard-terapeuta/ficha-modal/ficha-modal.component';
import {ResponsavelModalComponent} from './dashboard-terapeuta/responsavel-modal/responsavel-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    LoginComponent,
    CadastrarComponent,
    DashboardTerapeutaComponent,
    SobreProjetoComponent,
    PacienteModalComponent,
    FichaModalComponent,
    ResponsavelModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
