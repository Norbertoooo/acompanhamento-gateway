import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../helpers/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  sobre(): void {
    this.router.navigateByUrl('/sobre').then();
  }

  usuarioLogado(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  usuarioLogadoResponsavel(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null && token.includes('RESPONSAVEL');
  }

  usuarioLogadoTerapeuta(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null && token.includes('TERAPEUTA');
  }

  usuarioLogadoAdministrador(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null && token.includes('ADMINISTRADOR');
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']).then();
  }
}
