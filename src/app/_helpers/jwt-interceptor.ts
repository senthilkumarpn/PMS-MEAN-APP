import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {Observable} from 'rxjs';

export class JwtInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if(currentUser && currentUser.token){
            request = request.clone({setHeaders:{Authorization:`Bearer ${currentUser.token}`}});
        }
       return next.handle(request);
    }
}
export const JwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
}