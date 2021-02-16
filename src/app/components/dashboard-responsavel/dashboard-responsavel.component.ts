import {Component, OnInit} from '@angular/core';
import {Responsavel} from '../../model/responsavel.model';
import {ResponsavelService} from '../../service/responsavel.service';
import {AlertModalService} from '../../service/alert-modal.service';
import {Paciente} from '../../model/paciente.model';
import {FichaService} from '../../service/ficha.service';

@Component({
  selector: 'app-dashboard-responsavel',
  templateUrl: './dashboard-responsavel.component.html',
  styleUrls: ['./dashboard-responsavel.component.css']
})
export class DashboardResponsavelComponent implements OnInit {
  responsavel: Responsavel = {} as Responsavel;
  listaPacientes: Paciente[] = [];

  constructor(private responsavelService: ResponsavelService, private alertService: AlertModalService,
              private fichaService: FichaService) {
  }

  ngOnInit(): void {
    this.responsavelService.buscarResponsavel()
      .subscribe(value => this.responsavel = value, error => this.alertService.exibirErro(error));
    this.responsavelService.listarPacientes().subscribe(value => this.listaPacientes = value);
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
