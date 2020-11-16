import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarComponent} from './registrar/registrar.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/AuthGuard';

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
