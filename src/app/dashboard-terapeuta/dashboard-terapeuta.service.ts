import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardTerapeutaService {

  cadastrarPacienteUrl = environment.apiUrlBase.concat('/pacientes');

  constructor(private http: HttpClient) {
  }

  cadastrarPaciente(paciente: any): Observable<any> {
    return this.http.post(this.cadastrarPacienteUrl.concat('/vitor@gmail.com'), paciente).pipe();
  }

  listarPacientes(): Observable<any> {
    return this.http.get(this.cadastrarPacienteUrl.concat('/vitor@gmail.com')).pipe( (response) => response);
  }

}
