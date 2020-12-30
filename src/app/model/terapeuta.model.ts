import {LoginModel} from './login.model';
import {EnderecoModel} from './endereco.model';

export class TerapeutaModel {
  id?: number;
  nomeCompleto?: string;
  idade?: number;
  telefone?: number;
  crp?: number;
  cpf?: string;
  especialidade?: string;
  formacao?: string;
  endereco?: EnderecoModel;
  login?: LoginModel;
}
