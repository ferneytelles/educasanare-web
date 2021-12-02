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
    this.prueba();
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
    this.pageService.serverError.subscribe((data) => {
      if (data) {
        this.server = data;
      }
    });
  }

  async prueba(): Promise<void> {
    if (this.storage.isStorage(SessionStorageService.keyPages)){
      //
      this.pages = this.storage.getStorage(SessionStorageService.keyPages);
      console.log('storage');
    } else {
      this.pages = await this.pageService.setPagesStorage('ES');
      console.log('api');
    }
    console.log(this.pages);
  }

}
