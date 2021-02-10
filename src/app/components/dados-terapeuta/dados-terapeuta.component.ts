import {Component, Input, OnInit} from '@angular/core';
import {Terapeuta} from '../../model/terapeuta.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dados-terapeuta',
  templateUrl: './dados-terapeuta.component.html',
  styleUrls: ['./dados-terapeuta.component.css']
})
export class DadosTerapeutaComponent implements OnInit {

  @Input() terapeuta = {} as Terapeuta;
  bloqueado = true;
  formularioCadastro: FormGroup;
  isCollapsed = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formularioCadastro = this.formBuilder.group(
      {
        nomeCompleto: [],
        crfa: [],
        dataNascimento: [],
        telefone: [],
        formacao: [],
        especialidade: [],
        cpf: [],
        login: this.formBuilder.group(
          {
            email: [[Validators.required, Validators.email]],
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

  editarTerapeuta(): void {
    this.bloqueado === true ? this.bloqueado = false : this.bloqueado = true;
  }

}
