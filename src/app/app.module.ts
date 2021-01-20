import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './template/footer/footer.component';
import {CadastrarComponent} from './components/cadastrar/cadastrar.component';
import {DashboardTerapeutaComponent} from './components/dashboard-terapeuta/dashboard-terapeuta.component';
import {LoginComponent} from './components/login/login.component';
import {PrincipalComponent} from './template/principal/principal.component';
import {NavbarComponent} from './template/navbar/navbar.component';
import {SobreProjetoComponent} from './components/sobre-projeto/sobre-projeto.component';
import {PacienteModalComponent} from './components/dashboard-terapeuta/paciente-modal/paciente-modal.component';
import {AlertComponent} from './shared/alert/alert.component';
import {ResponsavelModalComponent} from './components/dashboard-terapeuta/responsavel-modal/responsavel-modal.component';
import {CadastrarPacienteModalComponent} from './components/dashboard-terapeuta/cadastrar-paciente-modal/cadastrar-paciente-modal.component';
import {FichaModalComponent} from './components/dashboard-terapeuta/ficha-modal/ficha-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxMaskModule} from 'ngx-mask';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorInterceptor, JwtInterceptor} from './helpers';
import {AuthenticationService} from './helpers/authentication.service';
import {PacienteService} from './service/paciente.service';
import localePtBr from '@angular/common/locales/pt';
import { DashboardResponsavelComponent } from './components/dashboard-responsavel/dashboard-responsavel.component';


registerLocaleData(localePtBr, 'pt-BR');

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
    ResponsavelModalComponent,
    CadastrarPacienteModalComponent,
    AlertComponent,
    DashboardResponsavelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthenticationService, PacienteService, NgbActiveModal, NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
