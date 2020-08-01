import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { ConfigService } from '../config/config.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL: string = environment.serverUrl;
  private TEST_URL: string = 'http://api.dev-etuition.amazecodes.com/api';
  // constructor(private http: HttpClient, private config: ConfigService) { }
  constructor(private http: HttpClient, private router: Router) {}

  get<T>(url: string): Observable<T> {
    let completeUrl = this.TEST_URL + url;
    return this.http.get<T>(completeUrl).pipe(map((res) => res));
  }

  post<T>(url: string, body: string): Observable<T> {
    let completeUrl = this.TEST_URL + url;
    return this.http.post<T>(completeUrl, body).pipe(map((res) => res));
  }

  put<T>(url: string, body: string): Observable<T> {
    let completeUrl = this.TEST_URL + url;
    return this.http.put<T>(completeUrl, body).pipe(map((res) => res));
  }

  delete<T>(url: string): Observable<T> {
    let completeUrl = this.TEST_URL + url;
    return this.http.delete<T>(completeUrl).pipe(map((res) => res));
  }

  patch<T>(url: string, body: string): Observable<T> {
    let completeUrl = this.TEST_URL + url;
    return this.http.patch<T>(completeUrl, body).pipe(map((res) => res));
  }
}
