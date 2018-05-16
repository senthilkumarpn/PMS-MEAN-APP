import {Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Observable, Operator} from 'rxjs';

import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { error } from 'util';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request);
        return next.handle(request).pipe(error(error=> error));
    }
}
export const ErrorInterceptorProvider = {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true,
}