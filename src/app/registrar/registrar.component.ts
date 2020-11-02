import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: []
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        email: [null],
        senha: [null],
        perfil: [null]
      });
  }
  registrar(): void {
    console.log(this.formulario);
    this.loginService.registrar(this.formulario.value).subscribe();
  }
}
