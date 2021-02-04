import {Endereco} from './endereco.model';
import {Login} from './login.model';

export interface Terapeuta {
  id: number;
  nomeCompleto: string;
  telefone: number;
  cpf: string;
  especialidade: string;
  formacao: string;
  endereco: Endereco;
  login: Login;
  crfa: string;
  loginEmail: string;
  dataNascimento: string;
}
