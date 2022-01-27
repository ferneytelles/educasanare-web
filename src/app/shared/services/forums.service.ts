import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ForumsEndPoint } from '../endpoints/forums.endpoint';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<any> {
    return this.http.get(ForumsEndPoint.categories)
    .pipe(
      tap((response: any) => response)
    );
  }

  getCategory(slug: string): Observable<any> {
    return this.http.get(ForumsEndPoint.category.format(slug))
    .pipe(
      tap((response: any) => response)
    );
  }

  getForum(slug: string): Observable<any> {
    return this.http.get(ForumsEndPoint.forum.format(slug))
    .pipe(
      tap((response: any) => response)
    );
  }

  createForum(data: any): Observable<any> {
    return this.http.post(ForumsEndPoint.forum, data)
    .pipe(
      tap((response: any) => response)
    );
  }
}
