import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@shared/services/authentication.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  static headerAuthorization(token: string): string {
    // return `${NAME_TOKEN_HEADER} ${token}`;
    return `Bearer ${token}`;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token =  AuthenticationService.token;
    // console.log('intercept');
    /**
     * si existe el token, es agregado a la cabecera junto con el
     * idioma por defecto el cual es español 'es', en caso de no haber, no se envia el token
     */
    if (token && !AuthenticationService.noInterceptor) {
      request = request.clone({
        setHeaders: {
          // 'Accept-Language': LanguageUtil.getStorageLanguage('es'),
          'accept-Language': 'es',
          authorization: JwtInterceptor.headerAuthorization(
            token
          ),
        },
      });
    } else {
      // request = request.clone({
      //   setHeaders: {
           // 'Accept-Language': LanguageUtil.getStorageLanguage('es')
      //   }
      // });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => event,
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401 || error.status === 403) {
              alert('No autorizado');
              //   this.authService.logout();
            }
          }
        }
      )
    );
  }
}
