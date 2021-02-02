import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';
import {AlertModalService} from '../service/alert-modal.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService, private alertService: AlertModalService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = this.authenticationService.currentUserValue;

    if (token !== null) {
      return true;
    } else {
      this.alertService.exibirErro('Por favor, efetue o login!');
      this.router.navigate(['/']).then();
      return false;
    }
  }

}
