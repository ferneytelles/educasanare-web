import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateEndpoint } from '@shared/endpoints/authenticate.endpoint';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static token: string;
  static noInterceptor = false;
  refresh = '';
  formData: FormData;

  constructor(
    private http: HttpClient
  ) {
    this.formData = new FormData();
    this.formData.append('username', 'adminCATO');
    this.formData.append('password', 'catoback');
  }

  getToken(): Observable<any>{
    return this.http.post(AuthenticateEndpoint.authenticate, this.formData)
    .pipe(tap((result: any) => AuthenticationService.token = result.access));
  }
}
