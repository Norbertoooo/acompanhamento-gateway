import {Injectable} from '@angular/core';
import {AlertComponent} from '../shared/alert/alert.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modal: NgbModal) {
  }

  private exibirAlerta(mensagem: string, tipo: string): void {
    const time = 3000;
    const modalref = this.modal.open(AlertComponent);
    modalref.componentInstance.mensagem = mensagem;
    modalref.componentInstance.tipo = tipo;
    setTimeout(() => {
      modalref.close();
    }, time);
  }

  exibirErro(mensagem: string): void {
    this.exibirAlerta(mensagem, 'danger');
  }

  exibirSucesso(mensagem: string): void {
    this.exibirAlerta(mensagem, 'success');
  }

}
