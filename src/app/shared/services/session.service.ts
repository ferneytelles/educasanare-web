import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionEndPoint } from '@shared/endpoints/session.endpoint';
import { map, tap } from 'rxjs/operators';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  modalSession: Subject<boolean> = new Subject<boolean>();
  login: Subject<boolean> = new Subject<boolean>();
  session = false;

  profile: any;
  // profile = {
  //   img: 'assets/images/face3.jpg',
  //   user: 'oscar_21',
  //   name: 'oscar',
  //   lastname: 'perez',
  //   email: 'oscar_perez21@gmail.com',
  //   password: 'hola123'
  // };

  // file: any;
  formUser: FormData;

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {
    this.login.subscribe((data: boolean) => {
      this.session = data;
    });
  }

  async getInformationUser(): Promise<boolean>{
    const [error, information] = await to(
    this.dataUser().toPromise()
    );
    // @ts-ignore
    if (error && error.status === 403) {
      await this.authentication.getToken();
      return await this.getInformationUser();
    }
    console.log(information[0]);
    if (!information[0].is_staff){
      this.profile = information[0];
      this.login.next(true);
      return true;
    } else {
      await this.authentication.tokenAccess(this.authentication.formData).toPromise();
      this.profile = null;
      this.login.next(false);
      return false;
    }
  }

  dataUser(): Observable<any> {
    return this.http.get(SessionEndPoint.dataUser).pipe(
      tap((response: any) => response)
    );
  }

  restorePassword(email: string): Observable<any>{
    this.formUser = new FormData();
    this.formUser.append('email', email);
    return this.http.post(SessionEndPoint.resetPassword, this.formUser)
    .pipe(
      tap((response: any) => response)
    );
  }


  confirmPassword(password: string, token: string): Observable<any>{
    this.formUser = new FormData();
    this.formUser.append('password', password);
    this.formUser.append('token', token);
    return this.http.post(SessionEndPoint.confirmPassword, this.formUser)
    .pipe(
      tap((response: any) => response)
    );
  }

  updateUser(data: any): Observable<any> {
    return this.http.put(SessionEndPoint.updateUser, data)
    .pipe(
      tap((response: any) => response)
    );
  }

}
