import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostEndPoint } from '@shared/endpoints/post.endpoint';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  tagSearch = new Subject<boolean>();
  post: any;

  constructor(
    private http: HttpClient
  ) { }

  searchPosts(tag: string, language: string, page: number): Observable<any> {
    return this.http.get(PostEndPoint.postSearch.format(tag, language, page)).pipe(
      map((response: any) => response)
    );
  }

  getPost(slugPost: string, language: string): Observable<any>{
    return this.http.get(PostEndPoint.post.format(slugPost, language)).pipe(
      map((response: any) => response)
    );
  }

  getPostsBySection(slug: string, language: string, page: number, order?: string): Observable<any> {
    // console.log(`order: ${order}`);
    if (order) {
      return this.http.get(PostEndPoint.postsOfSectionByOrder.format(slug, language, page, order))
      .pipe(
        map((response: any) => response)
      );
    } else {
      return this.http.get(PostEndPoint.postsOfSection.format(slug, language, page))
      .pipe(
        map((response: any) => response)
      );
    }
  }

  getEventsBySection(slug: string, language: string, page: number, date: string): Observable<any> {
    return this.http.get(PostEndPoint.postsOfSectionByDate.format(slug, language, page, date))
      .pipe(
        map((response: any) => response)
      );
  }
}
