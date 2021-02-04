import {Responsavel} from './responsavel.model';

export interface Paciente {
  id?: number;
  nomeCompleto?: string;
  dataNascimento?: string;
  responsaveis?: Responsavel[];
}
