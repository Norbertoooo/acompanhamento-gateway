import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DadosService} from '../service/dados.service';
import {AuthenticationService} from '../helpers/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router,
              private dadosService: DadosService,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });
  }

  logar(): void {
    console.log(this.formularioLogin.value);
    this.authenticationService.login(this.formularioLogin.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('/dashboard-terapeuta').then();
      }, (error) => (console.log(error))
    );
  }
  registrar(): void {
    this.router.navigateByUrl('/registrar').then();
  }

}
