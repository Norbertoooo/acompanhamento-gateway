import {Injectable} from '@angular/core';
import {BehaviorSubject, config, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../model/usuario.model';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UsuarioModel>;
  public currentUser: Observable<UsuarioModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioModel {
    return this.currentUserSubject.value;
  }

  login(username, password): any {
    return this.http.post<any>(`${environment.apiUrl}/autenticar`, {username, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
