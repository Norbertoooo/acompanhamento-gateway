import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacienteUrl = environment.apiUrlBase.concat('/pacientes/');
  terapeutaUrl = environment.apiUrlBase.concat('/terapeutas/');

  constructor(private http: HttpClient) {
  }

  cadastrarPaciente(paciente: any, usuarioLogado: string): Observable<any> {
    return this.http.post(this.pacienteUrl.concat(usuarioLogado), paciente).pipe();
  }
}
