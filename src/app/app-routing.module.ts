import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastrarComponent} from './cadastrar/cadastrar.component';
import {LoginComponent} from './login/login.component';
import {DashboardTerapeutaComponent} from './dashboard-terapeuta/dashboard-terapeuta.component';
import {AuthGuard} from './helpers';
import {SobreProjetoComponent} from './sobre-projeto/sobre-projeto.component';

const routes: Routes = [
  {path: 'registrar', component: CadastrarComponent},
  {path: '', component: LoginComponent},
  {path: 'sobre', component: SobreProjetoComponent},
  {path: 'dashboard-terapeuta', component: DashboardTerapeutaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
