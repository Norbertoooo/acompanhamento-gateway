import {Component, OnInit} from '@angular/core';
import {DashboardTerapeutaService} from './dashboard-terapeuta.service';
import {PacienteModel} from '../model/paciente.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PacienteModalComponent} from './paciente-modal/paciente-modal.component';
import {FichaModalComponent} from './ficha-modal/ficha-modal.component';
import {ResponsavelModalComponent} from './responsavel-modal/responsavel-modal.component';

@Component({
  selector: 'app-dashboard-terapeuta',
  templateUrl: './dashboard-terapeuta.component.html',
  styleUrls: ['./paciente-modal/paciente-modal.component.css']
})
export class DashboardTerapeutaComponent implements OnInit {

  pacientes: PacienteModel[];

  paciente = new PacienteModel();

  constructor(private terapeutaService: DashboardTerapeutaService, private modal: NgbModal) {
  }

  ngOnInit(): void {
    this.terapeutaService.listarPacientes().subscribe((response) => this.pacientes = response);
  }

  cadastrarPaciente(): void {
    this.terapeutaService.cadastrarPaciente(this.paciente).subscribe();
  }

  abrirResponsavelModal(): void {
    this.modal.open(ResponsavelModalComponent);
  }

  abrirFichaModal(): void {
    this.modal.open(FichaModalComponent);
  }

  abrirPacienteModal(): void {
    this.modal.open(PacienteModalComponent);
  }
}
