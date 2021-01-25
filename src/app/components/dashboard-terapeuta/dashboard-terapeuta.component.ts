import {Component, OnInit} from '@angular/core';
import {DashboardTerapeutaService} from './dashboard-terapeuta.service';
import {PacienteModel} from '../../model/paciente.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PacienteModalComponent} from './paciente-modal/paciente-modal.component';
import {FichaModalComponent} from './ficha-modal/ficha-modal.component';
import {ResponsavelModalComponent} from './responsavel-modal/responsavel-modal.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TerapeutaModel} from '../../model/terapeuta.model';
import {CadastrarPacienteModalComponent} from './cadastrar-paciente-modal/cadastrar-paciente-modal.component';
import {PacienteService} from '../../service/paciente.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ResponsavelModel} from '../../model/responsavel.model';

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
  formater = (x: {nomeCompleto: string}) => x.nomeCompleto;

  constructor(private activatedRoute: ActivatedRoute, private terapeutaService: DashboardTerapeutaService,
              private modal: NgbModal, private router: Router, private pacienteService: PacienteService) {
  }

  ngOnInit(): void {
    this.usuarioLogado = localStorage.getItem('emailLogado');
    this.obterPacientes();
    this.obterDadosTerapeuta();
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.pacientes.filter(v => v.nomeCompleto.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

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

  excluirPacientes(): void {
    this.pacienteService.excluirPaciente().subscribe((response) => {
      console.log(response.content);
    });
  }

}
