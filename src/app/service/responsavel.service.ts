import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  responsavelUrl = environment.apiUrlBase.concat('/responsaveis');

  constructor(private http: HttpClient) {
  }

  listarResponsaveis(page, count): Observable<any> {
    return this.http.get(this.responsavelUrl.concat('/' + page + '/' + count));
  }

  buscarResponsavel(): Observable<any> {
    return this.http.get(this.responsavelUrl);
  }

  listarPacientes(): Observable<any> {
    return this.http.get(this.responsavelUrl.concat('/pacientes'));
  }

}
