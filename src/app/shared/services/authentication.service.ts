import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateEndpoint } from '@shared/endpoints/authenticate.endpoint';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static token: string;
  static noInterceptor = false;
  refresh = '';
  formData: FormData;

  constructor(
    private http: HttpClient,
  ) {
    this.userData();
  }

  userData(): void{
    this.formData = new FormData();
    this.formData.append('email', 'grupocato@gmail.com');
    this.formData.append('password', 'catoback');
  }

  isTokenRefresh(): boolean {
    return !!localStorage.getItem(SessionStorageService.keyRefresh);
  }

  async getToken(): Promise<void> {
    if (this.isTokenRefresh){
      const [err, response] = await to(this.tokenRefresh().toPromise());
      // console.log(response);
      // @ts-ignore
      if (err && err.status === 401){
        await this.tokenAccess(this.formData).toPromise();
      }
    } else {
      await this.tokenAccess(this.formData).toPromise();
    }
  }

  tokenAccess(credentials: any): Observable<any> {
    console.log(credentials);
    return this.http.post(AuthenticateEndpoint.authenticate, credentials)
    .pipe(tap((result: any) => {
      AuthenticationService.token = result.access;
      localStorage.setItem(SessionStorageService.keyRefresh, result.refresh as string);
    }));
  }

  tokenRefresh(): Observable<any> {
    const formData = new FormData();
    const refresh = localStorage.getItem(SessionStorageService.keyRefresh);
    formData.append('refresh', refresh);
    return this.http.post(AuthenticateEndpoint.refresh, formData)
      .pipe(
        tap((result: any) => AuthenticationService.token = result.access)
      );
  }
}
