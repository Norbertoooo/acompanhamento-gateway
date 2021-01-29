import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertModalService} from '../../../service/alert-modal.service';
import {PacienteModel} from '../../../model/paciente.model';
import {PacienteService} from '../../../service/paciente.service';

@Component({
  selector: 'app-excluir-paciente-modal',
  templateUrl: './excluir-paciente-modal.component.html',
  styleUrls: ['./excluir-paciente-modal.component.css']
})
export class ExcluirPacienteModalComponent implements OnInit {

  @Output() event = new EventEmitter();

  pacientesSelecionados: PacienteModel[];

  constructor(private activeModal: NgbActiveModal, private alertService: AlertModalService, private pacienteService: PacienteService) {
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }

  excluirPacientes(): void {
    this.pacienteService.excluirPacientes(this.pacientesSelecionados).subscribe(value => {
      this.alertService.exibirSucesso('Pacientes Excluidos com sucesso!');
      this.event.emit('true');
      this.activeModal.close();
    }, error => {
      this.alertService.exibirErro(error);
    });
  }
}
