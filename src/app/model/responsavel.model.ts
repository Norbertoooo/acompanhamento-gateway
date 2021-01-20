import {EnderecoModel} from './endereco.model';
import {LoginModel} from './login.model';

export class ResponsavelModel {
  id?: number;
  nomeCompleto?: string;
  idade?: number;
  telefone?: number;
  cpf = '';
  parentesco?: string;
  endereco?: EnderecoModel;
  login?: LoginModel;
  loginEmail?: string;
  dataNascimento?: Date;
}
