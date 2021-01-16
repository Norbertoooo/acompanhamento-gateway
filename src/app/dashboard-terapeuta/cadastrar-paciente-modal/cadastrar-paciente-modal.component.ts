import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PacienteService} from '../../service/paciente.service';

@Component({
  selector: 'app-ficha-modal',
  templateUrl: './cadastrar-paciente-modal.component.html',
  styleUrls: ['./cadastrar-paciente-modal.component.css']
})
export class CadastrarPacienteModalComponent implements OnInit {

  formularioCadastroPaciente: FormGroup;
  private usuarioLogado: string;

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService) {
  }

  ngOnInit(): void {
    this.usuarioLogado = localStorage.getItem('emailLogado');

    this.formularioCadastroPaciente = this.formBuilder.group(
      {
        nomeCompleto: [],
        idade: []
      }
    );
  }

  cadastar(): void {
    this.pacienteService.cadastrarPaciente(this.formularioCadastroPaciente.value, this.usuarioLogado).subscribe();
  }

  cancelar(): void {

  }
}
