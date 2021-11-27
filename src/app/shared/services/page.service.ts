import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEndPoint } from '@shared/endpoints/page.endpoint';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import '@shared/utils/string';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) { }

  async getPages(): Promise<any> {
    await this.authentication.getToken().toPromise();
    return this.http.get(PageEndPoint.pages)
                .pipe(
                  map((response: any) => response.results)
                );
  }

  getPage(idPage: number, language: string): Observable<any> {
    return this.http.get(PageEndPoint.page.format(idPage, language))
                .pipe(
                  map((response: any) => response[0].page_metadata)
                );
  }

  async pages(): Promise<any>{
    const p = await this.getPages();
    const pages = await from(p).toPromise<any>();
    // console.log(pages);
    return pages;
  }
}
