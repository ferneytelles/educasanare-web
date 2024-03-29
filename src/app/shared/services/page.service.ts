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
  providedIn: 'root',
})
export class PageService {
  static language = 'ES';
  changeLanguage = new Subject<string>();
  serverError = new Subject<any>();
  /** Subject para ejecutar la modal de video */
  modalVideo: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService,
    private session: SessionStorageService,
    private sessionService: SessionService
  ) {}

  getPages(idProject: number): Observable<any> {
    return this.http
      .get(PageEndPoint.pages.format(idProject))
      .pipe(map((response: any) => response.results));
  }

  getPage(idPage: number, language: string): Observable<any> {
    return this.http
      .get(PageEndPoint.page.format(idPage, language))
      .pipe(map((response: any) => response.results[0].page_metadata));
  }

  getProject(): Observable<any> {
    return this.http
      .get(PageEndPoint.projectInfo)
      .pipe(map((response: any) => response));
  }

  getPageInicio(): Observable<any> {
    return this.http
      .get('assets/data/pageInicio.json')
      .pipe(map((response: any) => response[0].page_metadata));
  }

  getPageProject(): Observable<any> {
    return this.http
      .get('assets/data/pageProject.json')
      .pipe(map((response: any) => response[0].page_metadata));
  }

  getWebLabels(): Observable<any> {
    return this.http
      .get(PageEndPoint.webLabels)
      .pipe(map((response: any) => response));
  }

  async setPagesStorage(): Promise<any> {
    // const p = await this.getPages(3);
    // const pages = await from(p).toPromise<any>();
    ////////////////////////////////////////////////////////
    // if (!await this.getAuthentication()) {
    //   await this.setPagesStorage();
    //   return;
    // }
    // await this.getGeneralInformation();
    const [error, pages] = await to(this.getPages(3).toPromise());
    // console.log(pages);
    if (error) {
      // @ts-ignore
      if (error.status === 403) {
        await this.getAuthentication();
        await this.setPagesStorage();
        return;
      } else {
        this.serverError.next(error);
        return false;
      }
    }

    // console.log(pages);
    const arrayPages = [];
    for (const item of pages) {
      const page = await this.getPage(
        item.id,
        PageService.language
      ).toPromise();
      arrayPages.push(page);
    }
    /////////////////////////////////////////////////////
    // arrayPages[0] = await this.getPageInicio().toPromise();
    // arrayPages[1] = await this.getPageProject().toPromise();
    // const pages = arrayPages;
    /////////////////////////////////////////////////////

    this.session.setStorage(SessionStorageService.keyPages, arrayPages);
    return pages;
  }

  async getAuthentication(): Promise<boolean> {
    const [err, data] = await to(this.authentication.getToken());
    // @ts-ignore
    if (err) {
      // console.log(err);
      this.serverError.next(err);
      return false;
    }
    return true;
  }

  async getGeneralInformation(): Promise<boolean> {
    if (!(await this.getAuthentication())) {
      return false;
    }
    const [err2, projectInfo] = await to(this.getProject().toPromise());
    if (projectInfo) {
      const [error2, labels] = await to(this.getWebLabels().toPromise());
      this.session.setStorage(SessionStorageService.keyLabels, labels);
      this.session.setStorage(SessionStorageService.keyProject, projectInfo);
    } else {
      // console.log(err2);
      return false;
    }
    return true;
  }
}
