import {Component, Input, OnInit} from '@angular/core';
import {LoginModel} from '../model/login.model';
import {Router} from '@angular/router';
import {DadosService} from '../service/dados.service';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  login: LoginModel = new LoginModel();
  dados: string;

  constructor(private router: Router, private dadosService: DadosService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.dadosService.dados().subscribe( (result) => { this.dados = result; } );
  }

  ExibirLoginDigitado(): void {
    console.log(this.login);
  }

  logar(): void {
    this.loginService.login(this.login).subscribe(
      (result) => console.log(result)
    );
    // this.router.navigateByUrl('/dashboard');
  }

}
