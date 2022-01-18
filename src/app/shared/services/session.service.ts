import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionEndPoint } from '@shared/endpoints/session.endpoint';
import { map, tap } from 'rxjs/operators';
import to from 'await-to-js';

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

  file: any;
  formUser: FormData;

  constructor(
    private http: HttpClient
  ) {
    this.login.subscribe((data: boolean) => {
      this.session = data;
      if (!data) {
        this.profile = null;
      }
    });
  }

  // async getInformationUser(): Promise<void>{
  //   const [error, information] = await to(
  //   this.dataUser().toPromise()
  //   );
  //   this.profile = information[0];
  // }

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

}
