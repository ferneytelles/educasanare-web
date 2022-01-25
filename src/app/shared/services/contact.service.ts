import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageEndPoint } from '@shared/endpoints/page.endpoint';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendContactMail(data: any): Observable<any> {
    return this.http.post(PageEndPoint.contact, data)
    .pipe(
      tap((response: any) => response)
    );
  }
}
