import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language: string;
  content: any;
  menu: Array<any>;
  labels: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.language = PageService.language;
    const project = this.storage.getStorage(SessionStorageService.keyProject);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.menu = project.footer.find(x => x.language === this.language).menu;
    // console.log(this.menu);
  }

}
