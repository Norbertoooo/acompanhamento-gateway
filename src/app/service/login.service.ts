import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../model/login.model';
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

  login(login: LoginModel): Observable<any> {
    return this.http.post(this.loginUrl, login).pipe();
  }

  cadastrar(request: any): Observable<any> {
    return this.http.post(this.registrarUrl, request).pipe();
  }
}
