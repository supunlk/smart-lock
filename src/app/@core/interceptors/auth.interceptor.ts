import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { logout } from '@root-store/auth/auth.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && (error.status === 401)) {
          this._store.dispatch(logout());
        }
        return throwError(error);
      })
    );
  }
}

