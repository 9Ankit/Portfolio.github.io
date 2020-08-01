import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxIiwiaWF0IjoxNTI4NzgyMzA5LCJleHAiOjE1Mjg3ODU5MDl9.lF0NQwxPrK47Lq_EkD_oYjFHO1sAPmAE0UdphOy5M9A';

    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
