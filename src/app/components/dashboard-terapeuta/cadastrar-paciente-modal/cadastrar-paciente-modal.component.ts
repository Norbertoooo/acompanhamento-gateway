import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {PacienteService} from '../../../service/paciente.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertModalService} from '../../../service/alert-modal.service';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-ficha-modal',
  templateUrl: './cadastrar-paciente-modal.component.html',
  styleUrls: ['./cadastrar-paciente-modal.component.css'],
})
export class CadastrarPacienteModalComponent implements OnInit {

  @Output() event = new EventEmitter();
  formularioCadastroPaciente: FormGroup;
  usuarioLogado: string;

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService,
              private activeModal: NgbActiveModal, private alertService: AlertModalService) {
  }

  ngOnInit(): void {
    this.formularioCadastroPaciente = this.formBuilder.group(
      {
        nomeCompleto: [],
        dataNascimento: [],
        responsaveis: new FormArray([
          this.formBuilder.group({
            nomeCompleto: [],
            cpf: [],
            parentesco: [],
            telefone: [],
            login: this.formBuilder.group({
              email: []
            }),
            endereco: this.formBuilder.group({
              cep: [],
              numero: [],
              bairro: [],
              rua: [],
              cidade: [],
              estado: [],
              complemento: []
            })
          })
        ])
      }
    );
  }

  cadastar(): void {
    console.log(this.formularioCadastroPaciente.value);
    this.formularioCadastroPaciente.controls.dataNascimento.setValue(formatDate(this.formularioCadastroPaciente.get('dataNascimento').value, 'dd/MM/yyyy', 'pt-BR'));
    this.pacienteService.cadastrarPaciente(this.formularioCadastroPaciente.value)
      .subscribe(() => {
        this.alertService.exibirSucesso('Paciente cadastrado com sucesso!');
        this.event.emit('true');
        this.activeModal.dismiss('close');
      }, error => {
        this.alertService.exibirErro(error);
      });
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }

}
