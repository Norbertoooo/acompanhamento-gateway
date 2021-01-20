import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paciente-modal',
  templateUrl: './paciente-modal.component.html',
  styleUrls: ['./paciente-modal.component.css']
})
export class PacienteModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }

}
