import {Component, OnInit} from '@angular/core';
import {DashboardTerapeutaService} from './dashboard-terapeuta.service';
import {Paciente} from '../../model/paciente.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ActivatedRoute} from '@angular/router';
import {Terapeuta} from '../../model/terapeuta.model';
import {PacienteService} from '../../service/paciente.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {Responsavel} from '../../model/responsavel.model';
import {ExcluirPacienteModalComponent} from '../modals/excluir-paciente-modal/excluir-paciente-modal.component';
import {FichaService} from '../../service/ficha.service';
import {AlertModalService} from '../../service/alert-modal.service';
import {ResponsavelModalComponent} from '../modals/responsavel-modal/responsavel-modal.component';
import {FichaModalComponent} from '../modals/ficha-modal/ficha-modal.component';
import {PacienteModalComponent} from '../modals/paciente-modal/paciente-modal.component';
import {CadastrarPacienteModalComponent} from '../modals/cadastrar-paciente-modal/cadastrar-paciente-modal.component';

@Component({
  selector: 'app-dashboard-terapeuta',
  templateUrl: './dashboard-terapeuta.component.html',
  styleUrls: ['./dashboard-terapeuta.component.css']
})
export class DashboardTerapeutaComponent implements OnInit {

  pacientes: Paciente[] = [];
  paciente: Paciente;
  usuarioLogado: string;
  terapeuta: Terapeuta;
  contador = 5;
  page = 0;
  total: number;
  ahPacientesSelecionados = false;
  pesquisaPaciente: Paciente;
  campoSelecionado: any;
  pacientesSelecionados: Paciente[] = [];
  isCollapsed = false;
  formater = (x: { nomeCompleto: string }) => x.nomeCompleto;

  constructor(private activatedRoute: ActivatedRoute, private terapeutaService: DashboardTerapeutaService,
              private alertService: AlertModalService, private modal: NgbModal,
              private pacienteService: PacienteService, private fichaService: FichaService) {
  }

  ngOnInit(): void {
    this.usuarioLogado = sessionStorage.getItem('emailLogado');
    this.obterPacientes();
    this.obterDadosTerapeuta();
  }

  buscar = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.pacientes.filter(v => v.nomeCompleto.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  };

  obterPacientes(): void {
    this.terapeutaService.listarPacientes(this.page, this.contador).subscribe((response) => {
      console.log(response.content);
      this.pacientes = response.content;
      this.total = response.totalElements;
    });
  }

  cadastrarPaciente(): void {
    this.terapeutaService.cadastrarPaciente(this.paciente, this.usuarioLogado).subscribe();
  }

  obterDadosTerapeuta(): void {
    this.terapeutaService.buscarDadosTerapeuta().subscribe((response) => this.terapeuta = response);
  }

  abrirResponsavelModal(responsaveis: Responsavel[]): void {
    const modalRef = this.modal.open(ResponsavelModalComponent).componentInstance;
    modalRef.responsaveis = responsaveis;
  }

  abrirFichaModal(): void {
    this.modal.open(FichaModalComponent);
  }

  abrirPacienteModal(): void {
    this.modal.open(PacienteModalComponent);
  }

  abrirCadastroPacienteModal(): void {
    const modalRef = this.modal.open(CadastrarPacienteModalComponent, {size: 'lg'}).componentInstance;
    modalRef.usuarioLogado = this.usuarioLogado;
    modalRef.event.subscribe((event) => {
      if (event) {
        this.obterPacientes();
      }
    });
  }

  mudarPagina($event: number): void {
    this.page = $event - 1;
    this.obterPacientes();
  }

  abrirExcluirPacienteModal(): void {
    const modalRef = this.modal.open(ExcluirPacienteModalComponent).componentInstance;
    modalRef.pacientesSelecionados = this.pacientesSelecionados;
    modalRef.event.subscribe((event) => {
      if (event) {
        this.obterPacientes();
        this.resetarPacientesSelecionados();
      }
    });
  }

  resetarPacientesSelecionados(): void {
    this.pacientesSelecionados = [];
  }

  selecionarTodos(event: any): any {
    if (this.pacientesSelecionados.length === 0) {
      this.campoSelecionado = event.target.checked;
      this.pacientesSelecionados = this.pacientes;
    } else {
      this.pacientesSelecionados = [];
      this.campoSelecionado = false;
    }
  }

  selecionarPaciente(paciente: Paciente, event): void {
    if (event.target.checked) {
      this.pacientesSelecionados.push(paciente);
    } else {
      const index = this.pacientes.indexOf(paciente);
      this.pacientesSelecionados.splice(index, 1);
    }
  }

  downloadFicha(): any {
    this.fichaService.downloadFicha().subscribe(value => {
      const blob = new Blob([value], {type: 'application/pdf'});
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl);
    }, error => {
      this.alertService.exibirErro(error);
    });
  }
}
