import {Component, Input, OnInit} from '@angular/core';
import {UsuarioModel} from '../model/usuario.model';
import {Router} from '@angular/router';
import {DadosService} from '../service/dados.service';
import {LoginService} from '../service/login.service';
import {AuthenticationService} from '../helpers/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // todo utilizar reactive forms
  @Input()
  login: UsuarioModel = new UsuarioModel();
  dados: string;

  constructor(private router: Router, private dadosService: DadosService, private a: AuthenticationService) { }

  ngOnInit(): void {
    this.dadosService.dados().subscribe( (result) => { this.dados = result; } );
  }

  logar(): void {
    this.a.login(this.login.email, this.login.senha).subscribe(
      (result) => console.log(result), (error) => (console.log(error))
    );
    // this.router.navigateByUrl('/dashboard');
  }

}
