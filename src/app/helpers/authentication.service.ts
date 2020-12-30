import {Injectable} from '@angular/core';
import {BehaviorSubject, config, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginModel} from '../model/login.model';

@Injectable()
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<LoginModel>;
  public currentUser: Observable<LoginModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginModel>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login: LoginModel): any {
    return this.http.post<any>(`${environment.apiUrlBase}/autenticar`, login)
      .pipe(map(user => {
        console.log(user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
