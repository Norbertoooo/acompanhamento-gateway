import {Component, Input, OnInit} from '@angular/core';
import {LoginModel} from '../model/login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  login: LoginModel = new LoginModel();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ExibirLoginDigitado(): void {
    console.log(this.login);
  }

  logar(): void {
    this.router.navigateByUrl('/dashboard');
  }

}
