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

@Component({
  selector: 'app-dashboard-terapeuta',
  templateUrl: './dashboard-terapeuta.component.html',
  styleUrls: ['./dashboard-terapeuta.component.css']
})
export class DashboardTerapeutaComponent implements OnInit {

  pacientes: PacienteModel[];

  paciente = new PacienteModel();

  usuarioLogado: string;
  terapeuta: TerapeutaModel = new TerapeutaModel();
  contador = 8;
  page = 0;
  total: number;
  ahPacientesSelecionados = false;

  constructor(private activatedRoute: ActivatedRoute, private terapeutaService: DashboardTerapeutaService,
              private modal: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    this.usuarioLogado = localStorage.getItem('emailLogado');
    this.obterPacientes();
    this.obterDadosTerapeuta();
    console.log(this.usuarioLogado);
  }

  obterPacientes(): void {
    this.terapeutaService.listarPacientes(this.usuarioLogado, this.page, this.contador).subscribe((response) => {
      console.log(response.content);
      this.pacientes = response.content;
      this.total = response.totalElements;
    });
  }

  cadastrarPaciente(): void {
    this.terapeutaService.cadastrarPaciente(this.paciente, this.usuarioLogado).subscribe();
  }

  obterDadosTerapeuta(): void {
    this.terapeutaService.buscarDadosTerapeuta(this.usuarioLogado).subscribe((response) => this.terapeuta = response);
  }

  abrirResponsavelModal(): void {
    const modalRef = this.modal.open(ResponsavelModalComponent).componentInstance;
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
}
