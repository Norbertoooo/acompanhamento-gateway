import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ResponsavelModel} from '../../../model/responsavel.model';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-responsavel-modal',
  templateUrl: './responsavel-modal.component.html',
  styleUrls: ['./responsavel-modal.component.css']
})
export class ResponsavelModalComponent implements OnInit {

  @Output()
  event = new EventEmitter();

  responsaveis: ResponsavelModel[];

  responsavelSelecionado = new ResponsavelModel();

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.responsaveis);
  }

  cancelar(): void {
    console.log(this.responsavelSelecionado);
    this.activeModal.dismiss('close');
  }

}
