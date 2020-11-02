import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../model/login.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8081/autenticar';

  private registrarUrl = 'http://localhost:8081/registrar';


  constructor(private http: HttpClient) {
  }

  login(login: LoginModel): Observable<any> {
    return this.http.post(this.loginUrl, login);
  }

  registrar(request: any): Observable<any> {
    return this.http.post(this.registrarUrl, request);
  }
}
