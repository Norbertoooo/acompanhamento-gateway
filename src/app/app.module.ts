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
import {PacienteModalComponent} from './components/modals/paciente-modal/paciente-modal.component';
import {AlertComponent} from './shared/alert/alert.component';
import {ResponsavelModalComponent} from './components/modals/responsavel-modal/responsavel-modal.component';
import {CadastrarPacienteModalComponent} from './components/modals/cadastrar-paciente-modal/cadastrar-paciente-modal.component';
import {FichaModalComponent} from './components/modals/ficha-modal/ficha-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {NgbActiveModal, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorInterceptor, JwtInterceptor} from './helpers';
import {AuthenticationService} from './helpers/authentication.service';
import {PacienteService} from './service/paciente.service';
import localePtBr from '@angular/common/locales/pt';
import { DashboardResponsavelComponent } from './components/dashboard-responsavel/dashboard-responsavel.component';
import { DadosTerapeutaComponent } from './components/dados-terapeuta/dados-terapeuta.component';
import { ExcluirPacienteModalComponent } from './components/modals/excluir-paciente-modal/excluir-paciente-modal.component';
import {FichaService} from './service/ficha.service';
import {ResponsavelService} from './service/responsavel.service';
import { DadosResponsavelComponent } from './components/dados-responsavel/dados-responsavel.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { DashboardAdministradorComponent } from './components/dashboard-administrador/dashboard-administrador.component';
import {TerapeutaService} from './service/terapeuta.service';

registerLocaleData(localePtBr, 'pt-BR');

export const maskConfig: Partial<IConfig> | (() => Partial<IConfig>) = {};

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
    DashboardResponsavelComponent,
    DadosTerapeutaComponent,
    ExcluirPacienteModalComponent,
    DadosResponsavelComponent,
    DashboardAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthenticationService, PacienteService, NgbActiveModal, NgbModal, FichaService, ResponsavelService, TerapeutaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
