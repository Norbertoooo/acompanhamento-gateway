import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-responsavel-modal',
  templateUrl: './responsavel-modal.component.html',
  styleUrls: ['./responsavel-modal.component.css']
})
export class ResponsavelModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }

}
