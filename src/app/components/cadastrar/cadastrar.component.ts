import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {Login} from '../../model/login.model';
import {LoginService} from '../../service/login.service';
import {AlertModalService} from '../../service/alert-modal.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @Input()
  Login: Login;
  formularioCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
              private router: Router, private alertService: AlertModalService) {
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
        ),
        endereco: this.formBuilder.group({
          cep: [],
          rua: [],
          bairro: [],
          cidade: [],
          estado: [],
          complemento: [],
          numero: []
        })
      });
  }

  cadastrar(): void {
    console.log(this.formularioCadastro.value);
    this.formularioCadastro.controls.dataNascimento.setValue(formatDate(this.formularioCadastro.get('dataNascimento').value, 'dd/MM/yyyy', 'pt-BR'));
    this.loginService.cadastrar(this.formularioCadastro.value).subscribe(() => {
      this.showSucess('Terapeuta cadastrado com sucesso!');
      this.router.navigateByUrl('').then();
    }, error => {
      this.showError(error);
    });
  }

  private showSucess(mensagem: string): void {
    this.alertService.exibirSucesso(mensagem);
  }

  private showError(mensagem: any): void {
    this.alertService.exibirErro(mensagem);
  }

}
