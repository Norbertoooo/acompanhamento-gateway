import {ResponsavelModel} from './responsavel.model';

export class PacienteModel {
  id?: number;
  nomeCompleto?: string;
  idade?: number;
  responsaveis?: ResponsavelModel[];
}
