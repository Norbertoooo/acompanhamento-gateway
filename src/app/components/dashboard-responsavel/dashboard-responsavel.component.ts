import {Component, OnInit} from '@angular/core';
import {Responsavel} from '../../model/responsavel.model';
import {ResponsavelService} from '../../service/responsavel.service';
import {AlertModalService} from '../../service/alert-modal.service';

@Component({
  selector: 'app-dashboard-responsavel',
  templateUrl: './dashboard-responsavel.component.html',
  styleUrls: ['./dashboard-responsavel.component.css']
})
export class DashboardResponsavelComponent implements OnInit {

  responsavel: Responsavel = {} as Responsavel;

  constructor(private responsavelService: ResponsavelService, private alertService: AlertModalService) {
  }

  ngOnInit(): void {
    this.responsavelService.buscarResponsavel()
      .subscribe(value => this.responsavel = value, error => this.alertService.exibirErro(error));
  }

}
