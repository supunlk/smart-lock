import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  get<T>(endpoint: string, params?: { [param: string]: string }): Observable<T> {
    return this._http.get(environment.apiBaseUrl + `${endpoint}`, {params}) as Observable<T>;
  }

  post<T>(endpoint: string, payload: object, params?: { [param: string]: string }): Observable<T> {
    return this._http.post(environment.apiBaseUrl + `${endpoint}`, payload, {params}) as Observable<T>;
  }
}
