import {Endereco} from './endereco.model';
import {Login} from './login.model';

export interface Responsavel {
  id: number;
  nomeCompleto: string;
  telefone: number;
  cpf: string;
  parentesco: string;
  endereco: Endereco;
  login: Login;
  loginEmail: string;
  dataNascimento: string;
}
