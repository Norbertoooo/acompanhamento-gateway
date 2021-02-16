import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Responsavel} from '../../../model/responsavel.model';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-responsavel-modal',
  templateUrl: './responsavel-modal.component.html',
  styleUrls: ['./responsavel-modal.component.css']
})
export class ResponsavelModalComponent implements OnInit {

  @Output()
  event = new EventEmitter();

  responsaveis: Responsavel[];

  responsavelSelecionado = {} as Responsavel;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.responsaveis);
    this.responsavelSelecionado = this.responsaveis[0];
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }

}
