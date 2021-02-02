import {Component, Input, OnInit} from '@angular/core';
import {TerapeutaModel} from '../../model/terapeuta.model';

@Component({
  selector: 'app-dados-terapeuta',
  templateUrl: './dados-terapeuta.component.html',
  styleUrls: ['./dados-terapeuta.component.css']
})
export class DadosTerapeutaComponent implements OnInit {

  @Input() terapeuta = new TerapeutaModel();
  bloqueado = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  formatarCpf(): string {
    if (this.terapeuta.cpf !== null) {
      const cpf = this.terapeuta.cpf.replace(/[^\d]/g, '');
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      return '';
    }
  }

  editarTerapeuta(): void {
    this.bloqueado === true ? this.bloqueado = false : this.bloqueado = true ;
  }
}
