import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  private terapeutaUrl = environment.apiUrlBase.concat('/terapeutas');

  constructor(private http: HttpClient) {
  }

  buscarTerapeutas(page, contador): Observable<any> {
    return this.http.get(this.terapeutaUrl.concat('/' + page + '/' + contador));
  }

  buscarDadosTerapeuta(): Observable<any>  {
    return this.http.get(this.terapeutaUrl);
  }

  atualizarTerapeuta(terapeuta: any): Observable<any> {
    return this.http.put(this.terapeutaUrl, terapeuta);
  }

}
