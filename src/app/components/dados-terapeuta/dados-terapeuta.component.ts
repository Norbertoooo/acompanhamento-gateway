import {Component, OnInit} from '@angular/core';
import {Terapeuta} from '../../model/terapeuta.model';
import {TerapeutaService} from '../../service/terapeuta.service';
import {AlertModalService} from '../../service/alert-modal.service';

@Component({
  selector: 'app-dados-terapeuta',
  templateUrl: './dados-terapeuta.component.html',
  styleUrls: ['./dados-terapeuta.component.css']
})
export class DadosTerapeutaComponent implements OnInit {

  terapeuta: Terapeuta = {} as Terapeuta;
  isBlocked = true;
  isCollapsed = false;

  constructor(private terapeutaService: TerapeutaService, private alertService: AlertModalService) {
  }

  ngOnInit(): void {
    this.obterDadosTerapeuta();
  }

  editarTerapeuta(): void {
    this.isBlocked === true ? this.isBlocked = false : this.isBlocked = true;
  }

  obterDadosTerapeuta(): void {
    this.terapeutaService.buscarDadosTerapeuta()
      .subscribe((response: Terapeuta) => {
        this.terapeuta = response;
      }, error => {
        this.alertService.exibirErro(error);
      });
  }

  salvarAlteracoes(): void {
    this.terapeutaService.atualizarTerapeuta(this.terapeuta)
      .subscribe(response => {
        this.terapeuta = response;
        this.isBlocked = true;
        this.obterDadosTerapeuta();
        this.alertService.exibirSucesso('Informações alteradas com sucesso!');
      }, (error) => {
        this.alertService.exibirErro(error);
      });
  }

}
