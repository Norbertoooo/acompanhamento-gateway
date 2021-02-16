import {Component, Input, OnInit} from '@angular/core';
import {Responsavel} from '../../model/responsavel.model';

@Component({
  selector: 'app-dados-responsavel',
  templateUrl: './dados-responsavel.component.html',
  styleUrls: ['./dados-responsavel.component.css']
})
export class DadosResponsavelComponent implements OnInit {

  @Input() responsavel: Responsavel = {} as Responsavel;
  bloqueado: true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
