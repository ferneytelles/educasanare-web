import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ForumsEndPoint } from '../endpoints/forums.endpoint';
import { tap } from 'rxjs/operators';
import { PageService } from '@shared/services/page.service';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  category: any;

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<any> {
    return this.http.get(ForumsEndPoint.categories.format(PageService.language))
    .pipe(
      tap((response: any) => response)
    );
  }

  getCategory(slug: string): Observable<any> {
    return this.http.get(ForumsEndPoint.category.format(slug, PageService.language))
    .pipe(
      tap((response: any) => response)
    );
  }

  getForums(category: string, page: number, order: string): Observable<any> {
    return this.http.get(ForumsEndPoint.forumsByCAtegory.format(category, page, order))
    .pipe(
      tap((response: any) => response)
    );
  }

  getForumsForHome(order: string): Observable<any> {
    return this.http.get(ForumsEndPoint.forums.format(order))
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
    return this.http.post(ForumsEndPoint.createForum, data)
    .pipe(
      tap((response: any) => response)
    );
  }

  editForum(data: any, id: number): Observable<any> {
    return this.http.put(ForumsEndPoint.editForum.format(id), data)
    .pipe(
      tap((response: any) => response)
    );
  }

  deleteForum(id: number): Observable<any> {
    return this.http.delete(ForumsEndPoint.deleteForum.format(id))
    .pipe(
      tap((response: any) => response)
    );
  }
}
