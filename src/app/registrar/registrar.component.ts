import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: []
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required]],
        perfil: [null, [Validators.required]]
      });
  }
  registrar(): void {
    console.log(this.formulario);
    this.loginService.registrar(this.formulario.value).subscribe( () => this.router.navigateByUrl('/') );
  }
}
