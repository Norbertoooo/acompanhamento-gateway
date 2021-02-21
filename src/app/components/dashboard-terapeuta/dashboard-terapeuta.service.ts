import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardTerapeutaService {

  pacienteUrl = environment.apiUrlBase.concat('/pacientes/');

  constructor(private http: HttpClient) {
  }

  cadastrarPaciente(paciente: any, usuarioLogado: string): Observable<any> {
    return this.http.post(this.pacienteUrl.concat(usuarioLogado), paciente).pipe();
  }

  listarPacientes(page: number, count: number): Observable<any> {
    return this.http.get(this.pacienteUrl.concat(page + '/' + count)).pipe((response) => response);
  }

}
