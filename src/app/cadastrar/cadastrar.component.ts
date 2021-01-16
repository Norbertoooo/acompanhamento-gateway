import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {DatePipe, formatDate} from '@angular/common';
import {LoginModel} from '../model/login.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formularioCadastro: FormGroup;
  @Input()
  Login: LoginModel;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formularioCadastro = this.formBuilder.group(
      {
        nomeCompleto: [null, [Validators.required]],
        crfa: [null, [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        telefone: [null, [Validators.required]],
        formacao: [null, [Validators.required]],
        especialidade: [null, [Validators.required]],
        cpf: [null, [Validators.required]],
        login: this.formBuilder.group(
          {
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required]]
          }
        )
      });
  }

  cadastrar(): void {
    console.log(this.formularioCadastro.value);
    this.formularioCadastro.controls.dataNascimento.setValue(formatDate(this.formularioCadastro.get('dataNascimento').value, 'dd/MM/yyyy', 'pt-BR'));
    this.loginService.cadastrar(this.formularioCadastro.value).subscribe(() => this.router.navigateByUrl('').then());
  }
}
