import {EnderecoModel} from './endereco.model';
import {LoginModel} from './login.model';

export class TerapeutaModel {
  id?: number;
  nomeCompleto?: string;
  idade?: number;
  telefone?: number;
  crp?: number;
  cpf = '';
  especialidade?: string;
  formacao?: string;
  endereco?: EnderecoModel;
  login?: LoginModel;
  crfa?: string;
  loginEmail?: string;
  dataNascimento?: Date;
}
