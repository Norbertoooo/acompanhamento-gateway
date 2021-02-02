import {Component, OnInit} from '@angular/core';
import {DashboardTerapeutaService} from './dashboard-terapeuta.service';
import {PacienteModel} from '../../model/paciente.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PacienteModalComponent} from './paciente-modal/paciente-modal.component';
import {FichaModalComponent} from './ficha-modal/ficha-modal.component';
import {ResponsavelModalComponent} from './responsavel-modal/responsavel-modal.component';
import {ActivatedRoute} from '@angular/router';
import {TerapeutaModel} from '../../model/terapeuta.model';
import {CadastrarPacienteModalComponent} from './cadastrar-paciente-modal/cadastrar-paciente-modal.component';
import {PacienteService} from '../../service/paciente.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {ResponsavelModel} from '../../model/responsavel.model';
import {ExcluirPacienteModalComponent} from './excluir-paciente-modal/excluir-paciente-modal.component';
import {FichaService} from '../../service/ficha.service';
import {AlertModalService} from '../../service/alert-modal.service';

@Component({
  selector: 'app-dashboard-terapeuta',
  templateUrl: './dashboard-terapeuta.component.html',
  styleUrls: ['./dashboard-terapeuta.component.css']
})
export class DashboardTerapeutaComponent implements OnInit {

  pacientes: PacienteModel[] = [];
  paciente = new PacienteModel();
  usuarioLogado: string;
  terapeuta: TerapeutaModel = new TerapeutaModel();
  contador = 5;
  page = 0;
  total: number;
  ahPacientesSelecionados = false;
  pesquisaPaciente: PacienteModel;
  campoSelecionado: any;
  pacientesSelecionados: any;
  formater = (x: { nomeCompleto: string }) => x.nomeCompleto;

  constructor(private activatedRoute: ActivatedRoute, private terapeutaService: DashboardTerapeutaService,
              private alertService: AlertModalService, private modal: NgbModal,
              private pacienteService: PacienteService, private fichaService: FichaService) {
  }

  ngOnInit(): void {
    if (this.terapeuta.endereco == null) {
      this.alertService.exibirAviso('Por favor, Preencha o endereço');
    }
    this.usuarioLogado = localStorage.getItem('emailLogado');
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

  abrirResponsavelModal(responsaveis: ResponsavelModel[]): void {
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
    const modalRef = this.modal.open(CadastrarPacienteModalComponent).componentInstance;
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
    this.campoSelecionado = event.target.checked;
    if (this.pacientesSelecionados == null) {
      this.pacientesSelecionados = this.pacientes;
    } else {
      this.pacientesSelecionados = null;
    }
  }

  selecionarPaciente(paciente: PacienteModel): void {

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
