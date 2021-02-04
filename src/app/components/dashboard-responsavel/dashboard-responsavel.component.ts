import {Component, Input, OnInit} from '@angular/core';
import {Responsavel} from '../../model/responsavel.model';

@Component({
  selector: 'app-dashboard-responsavel',
  templateUrl: './dashboard-responsavel.component.html',
  styleUrls: ['./dashboard-responsavel.component.css']
})
export class DashboardResponsavelComponent implements OnInit {

  @Input() responsavel: Responsavel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
