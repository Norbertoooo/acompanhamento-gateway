import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Login} from '../model/login.model';

@Injectable()
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(sessionStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login: Login): any {
    return this.http.post<any>(`${environment.apiUrlBase}/autenticar`, login)
      .pipe(map(user => {
        console.log(user);
        sessionStorage.setItem('token', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  getUsuarioLogado(): string {
    return sessionStorage.getItem('emailLogado');
  }
}
