import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private authService: AuthService, private routering: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.guardAuth().pipe(
      tap((user) => {
        if (!user) {
          this.routering.navigate(['/login']);
        }
      })
    );
  }
}
