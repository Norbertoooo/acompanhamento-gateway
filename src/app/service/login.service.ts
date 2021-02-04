import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../model/login.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = environment.apiUrlBase.concat('/login');

  private registrarUrl = environment.apiUrlBase.concat('/cadastrar');

  constructor(private http: HttpClient) {
  }

  login(login: Login): Observable<any> {
    return this.http.post(this.loginUrl, login);
  }

  cadastrar(request: any): Observable<any> {
    return this.http.post(this.registrarUrl, request);
  }
}
