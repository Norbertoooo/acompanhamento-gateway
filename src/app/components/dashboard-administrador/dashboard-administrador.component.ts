import {Component, OnInit} from '@angular/core';
import {Terapeuta} from '../../model/terapeuta.model';
import {TerapeutaService} from '../../service/terapeuta.service';
import {AlertModalService} from '../../service/alert-modal.service';
import {PacienteService} from '../../service/paciente.service';
import {Paciente} from '../../model/paciente.model';
import {ResponsavelService} from '../../service/responsavel.service';
import {Responsavel} from '../../model/responsavel.model';

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent implements OnInit {

  terapeutas: Terapeuta[] = [];
  pacientes: Paciente[] = [];
  responsaveis: Responsavel[] = [];
  contador = 10;
  page = 0;
  total: number;
  terapeutaIsCollapsed: false;
  pacienteIsCollapsed: false;
  responsavelIsCollapsed: false;

  constructor(private terapeutaService: TerapeutaService, private alertService: AlertModalService,
              private pacienteService: PacienteService, private responsavelService: ResponsavelService) {
  }

  ngOnInit(): void {
    this.obterPacientes();
    this.obterTerapeutas();
    this.obterResponsaveis();
  }

  mudarPaginaPaciente($event: number): void {
    this.page = $event - 1;
    this.obterPacientes();
  }

  mudarPaginaTerapeuta($event: number): void {
    this.page = $event - 1;
    this.obterTerapeutas();
  }

  mudarPaginaResponsavel($event: number): void {
    this.page = $event - 1;
    this.obterResponsaveis();
  }

  private obterPacientes(): void {
    this.pacienteService.buscarPacientes(this.page, this.contador)
      .subscribe((value) => {
        this.pacientes = value.content;
      }, (error) => {
        console.log(error);
        this.alertService.exibirErro(error);
      });
  }

  private obterTerapeutas(): void {
    this.terapeutaService.buscarTerapeutas(this.page, this.contador)
      .subscribe((value) => {
        this.terapeutas = value.content;
      }, (error) => {
        console.log(error);
        this.alertService.exibirErro(error);
      });

  }

  private obterResponsaveis(): void {
    this.responsavelService.listarResponsaveis(this.page, this.contador)
      .subscribe((value) => {
        this.responsaveis = value.content;
      }, (error) => {
        console.log(error);
        this.alertService.exibirErro(error);
      });
  }
}
