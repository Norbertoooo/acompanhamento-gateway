import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteUrl = environment.apiUrlBase.concat('/pacientes');

  constructor(private http: HttpClient) {
  }

  buscarPacientes(page, contador): Observable<any> {
    return this.http.get(this.pacienteUrl.concat('/admin/' + page + '/' + contador));
  }

  cadastrarPaciente(paciente: any): Observable<any> {
    return this.http.post(this.pacienteUrl, paciente).pipe();
  }

  excluirPacientes(pacientes: any): Observable<any> {
    return this.http.request('delete', this.pacienteUrl, {body: pacientes});
  }
}
