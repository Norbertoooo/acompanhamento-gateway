import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaService {
  private fichaUrl = environment.apiUrlBase.concat('/fichas/exportar/1');

  constructor(private http: HttpClient) {
  }

  downloadFicha(): Observable<any> {
    return this.http.get(this.fichaUrl, {responseType: 'blob'});
  }
}
