import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  static keyLanguage = 'language';
  static keyLabels = 'webLabels';
  static keyPages = 'pages';
  static keyProject = 'project';
  static keySearch = 'tag';
  static keyRefresh = 'token_refresh';

  constructor() { }

  isStorage(key: string): boolean{
    const value = sessionStorage.getItem(key);
    return !!value;
  }

  getStorage(key: string): any{
    const value = JSON.parse(sessionStorage.getItem(key));
    return value;
  }

  setStorage(key: string, value: any): void{
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  clear(): void{
    sessionStorage.clear();
  }

  removeStorage(key: string): void{
    sessionStorage.removeItem(key);
  }
}
