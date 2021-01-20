import {Component, OnInit} from '@angular/core';
import {ResponsavelModel} from '../../model/responsavel.model';

@Component({
  selector: 'app-dashboard-responsavel',
  templateUrl: './dashboard-responsavel.component.html',
  styleUrls: ['./dashboard-responsavel.component.css']
})
export class DashboardResponsavelComponent implements OnInit {

  responsavel = new ResponsavelModel();

  constructor() {
  }

  ngOnInit(): void {
  }

}
