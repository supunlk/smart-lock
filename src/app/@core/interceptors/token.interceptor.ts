import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '@root-store/auth/auth.selectors';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _store: Store) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._store.select(selectAuthToken).pipe(
      first(),
      mergeMap((token) => {
        const authReq = !!token ? request.clone({
          headers: request.headers.set('X-Authorization', `Bearer ${token}`)
        }) : request;

        return next.handle(authReq);
      })
    );
  }
}
