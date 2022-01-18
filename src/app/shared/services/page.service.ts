import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEndPoint } from '@shared/endpoints/page.endpoint';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import '@shared/utils/string';
import { SessionStorageService } from './session-storage.service';
import { to } from 'await-to-js';
import { SessionService } from '@shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  static language = 'ES';
  changeLanguage = new Subject<string>();
  serverError = new Subject<any>();

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService,
    private session: SessionStorageService,
    private sessionService: SessionService
  ) { }

  getPages(idProject: number): Observable<any> {
    return this.http.get(PageEndPoint.pages.format(idProject))
                .pipe(
                  map((response: any) => response.results)
                );
  }

  getPage(idPage: number, language: string): Observable<any> {
    return this.http.get(PageEndPoint.page.format(idPage, language))
                .pipe(
                  map((response: any) => response.results[0].page_metadata)
                );
  }

  getProject(): Observable<any> {
    return this.http.get(PageEndPoint.projectInfo)
        .pipe(
          map((response: any) => response)
        );
  }

  getPageInicio(): Observable<any> {
    return this.http.get('assets/data/pageInicio.json')
                .pipe(
                  map((response: any) => response[0].page_metadata)
                );
  }

  getPageProject(): Observable<any> {
    return this.http.get('assets/data/pageProject.json')
                .pipe(
                  map((response: any) => response[0].page_metadata)
                );
  }


  async setPagesStorage(): Promise<any>{
    // const p = await this.getPages(3);
    // const pages = await from(p).toPromise<any>();
    ////////////////////////////////////////////////////////
    // if (!await this.getAuthentication()) {
    //   await this.setPagesStorage();
    //   return;
    // }
    // await this.getGeneralInformation();
    const [error, pages] = await to(this.getPages(3).toPromise());
    console.log(pages);
    // @ts-ignore
    if (error && error.status === 403){
      await this.getAuthentication();
      await this.setPagesStorage();
      return;
    }
    console.log(pages);
    const arrayPages = [];
    for (const item of pages) {
      const page = await this.getPage(item.id, PageService.language).toPromise();
      arrayPages.push(page);
    }
    /////////////////////////////////////////////////////
    // arrayPages[0] = await this.getPageInicio().toPromise();
    // arrayPages[1] = await this.getPageProject().toPromise();
    // const pages = arrayPages;
    /////////////////////////////////////////////////////

    this.session.setStorage(
      SessionStorageService.keyPages,
      arrayPages
    );
    return pages;
  }

  async getAuthentication(): Promise<boolean>{
    const [err, data] = await to(this.authentication.getToken());
    // @ts-ignore
    if (err){
      console.log(err);
      this.serverError.next(err);
      return false;
    }
    const [error, information] = await to(
      this.sessionService.dataUser().toPromise()
    );
    if (!information[0].is_staff){
      this.sessionService.profile = information[0];
      this.sessionService.login.next(true);
    }
    return true;
  }

  async getGeneralInformation(): Promise<any> {
    await this.getAuthentication();
    const [err2, projectInfo] = await to(this.getProject().toPromise());
    if (projectInfo){
      this.session.setStorage(
        SessionStorageService.keyProject,
        projectInfo
      );
    }else {
      console.log(err2);
      return false;
    }
    return true;
  }



}
