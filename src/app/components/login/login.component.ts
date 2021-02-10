import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../helpers/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertModalService} from '../../service/alert-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private alertService: AlertModalService) {
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
        this.router.navigateByUrl('/dashboard-terapeuta', {state: {result}}).then();
        if (result.login.perfil === 'RESPONSAVEL') {
          this.router.navigateByUrl('/dashboard-responsavel', {state: {result}}).then();
        }
        sessionStorage.setItem('emailLogado', result.login.email);
      }, (error) => {
        this.alertService.exibirErro(error);
      }
    );
  }

  cadastrar(): void {
    this.router.navigateByUrl('/cadastrar').then();
  }

}
