import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEndPoint } from '@shared/endpoints/page.endpoint';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import '@shared/utils/string';
import { SessionStorageService } from './session-storage.service';
import { to } from 'await-to-js';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  static language = 'ES';
  serverError = new Subject<any>();

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService,
    private session: SessionStorageService
  ) { }

  getPages(idProject: number): Observable<any> {
    return this.http.get(PageEndPoint.pages.format(idProject))
                .pipe(
                  map((response: any) => response)
                );
  }

  getPage(idPage: number, language: string): Observable<any> {
    return this.http.get(PageEndPoint.page.format(idPage, language))
                .pipe(
                  map((response: any) => response[0].page_metadata)
                );
  }

  getProject(): Observable<any> {
    return this.http.get(PageEndPoint.projectInfo)
        .pipe(
          map((response: any) => response)
        );
  }


  async setPagesStorage(language: string): Promise<any>{
    // await this.authentication.getToken().toPromise();
    // console.log('error: ', err, '\nData: ', data);
    // const p = await this.getPages(3);
    // const pages = await from(p).toPromise<any>();
    const pages = await this.getPages(3).toPromise();
    // console.log(pages);
    const arrayPages = [];
    for (const item of pages) {
      const page = await this.getPage(item.id, language).toPromise();
      arrayPages.push(page);
    }

    this.session.setStorage(
      SessionStorageService.keyPages,
      arrayPages
    );
    return pages;
  }

  async getGeneralInformation(): Promise<any> {
    const [err, data] = await to(this.authentication.getToken().toPromise());
    const projectInfo = await this.getProject().toPromise();
    this.session.setStorage(
      SessionStorageService.keyProject,
      projectInfo
    );
    return projectInfo;
  }



}
