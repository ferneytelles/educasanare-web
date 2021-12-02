import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '../../shared/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  content: any;

  constructor(
    // private pageService: PageService,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'inicio');
    // this.getDataStorage();
  }

  async getDataStorage(): Promise<void>{
    await new Promise((r, j) => this.getData(r, j));
  }

  getData(resolve: any, reject: any): void{
    if (this.storage.isStorage(SessionStorageService.keyPages)){
      this.content = this.storage.getStorage(
        SessionStorageService.keyPages
      ).find(obj => obj.slug === 'inicio');
      // console.log(this.content);
      resolve();
    } else {
      setTimeout(() => this.getData(resolve, reject));
    }
  }


}
