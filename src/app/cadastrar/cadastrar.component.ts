import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.css']
})
export class CadastrarComponent implements OnInit {

  formularioCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formularioCadastro = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        senha: [null, [Validators.required]],
        perfil: [null, [Validators.required]]
      });
  }
  cadastrar(): void {
    console.log(this.formularioCadastro.value);
    this.loginService.cadastrar(this.formularioCadastro.value).subscribe( () => this.router.navigateByUrl('/').then() );
  }
}
