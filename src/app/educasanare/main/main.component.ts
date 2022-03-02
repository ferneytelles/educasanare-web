import { Component, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lastScroll = 0;
  showHeader = true;
  pages: any;
  server: any;

  constructor(
    private pageService: PageService,
    private storage: SessionStorageService
  ) {
    this.dataInit();
   }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll === 0) {
        this.showHeader = true;
      }
      if (currentScroll > this.lastScroll && currentScroll > 500){
        this.showHeader = false;
      }
      if (currentScroll < this.lastScroll){
        this.showHeader = true;
      }
      this.lastScroll = currentScroll;
    });
    this.languageInit();
    this.pageService.serverError.subscribe((data) => {
        this.server = data;
        console.log(data);
    });
    this.pageService.changeLanguage.subscribe((data) => {
      PageService.language = data;
      this.pages = false;
      this.languageInit();
      this.getPages();
    });
    this.pageService.getAuthentication();
  }

  languageInit(): void{
    localStorage.setItem('language', PageService.language);
  }

  async dataInit(): Promise<void> {
    // DATA INICIAL
    if (this.storage.isStorage(SessionStorageService.keyPages)){
      this.pages = this.storage.getStorage(SessionStorageService.keyPages);
      // console.log('storage');
    } else {
      await this.pageService.getGeneralInformation();
      await this.getPages();
      // console.log('api');
    }
    // console.log(this.pages);
  }

  async getPages(): Promise<void> {
    await this.pageService.setPagesStorage();
    this.pages = true;
  }

}
