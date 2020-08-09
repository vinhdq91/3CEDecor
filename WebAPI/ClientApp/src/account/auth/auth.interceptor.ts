import { from, Observable } from "rxjs";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if (localStorage.getItem('token') != null){
            const clonedReq = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            })

            return next.handle(clonedReq).pipe(
                tap(
                    succ => {},
                    err => {
                        if (err.Status == 401){
                            localStorage.removeItem('token');
                            this.router.navigateByUrl('/user/login');
                        }
                    }
                )
            )
        }
        else{
            return next.handle(request.clone());
        }
    }
}