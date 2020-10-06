import {Component, Input, OnInit} from '@angular/core';
import {LoginModel} from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  login: LoginModel = new LoginModel();

  constructor() { }

  ngOnInit(): void {
  }

  ExibirLoginDigitado(): void {
    console.log(this.login);
  }

}
