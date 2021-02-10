import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardTerapeutaComponent} from './components/dashboard-terapeuta/dashboard-terapeuta.component';
import {AuthGuard} from './helpers';
import {SobreProjetoComponent} from './components/sobre-projeto/sobre-projeto.component';
import {CadastrarComponent} from './components/cadastrar/cadastrar.component';
import {DashboardResponsavelComponent} from './components/dashboard-responsavel/dashboard-responsavel.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarComponent},
  {path: '', component: LoginComponent},
  {path: 'sobre', component: SobreProjetoComponent},
  {path: 'dashboard-terapeuta', component: DashboardTerapeutaComponent, canActivate: [AuthGuard], data: {perfil: 'TERAPEUTA'}},
  {path: 'dashboard-responsavel', component: DashboardResponsavelComponent, canActivate: [AuthGuard], data: {perfil: 'RESPONSAVEL'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
