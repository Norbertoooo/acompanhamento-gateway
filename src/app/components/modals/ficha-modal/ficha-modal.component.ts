import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ficha-modal',
  templateUrl: './ficha-modal.component.html',
  styleUrls: ['./ficha-modal.component.css']
})
export class FichaModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.activeModal.dismiss('close');
  }
}
