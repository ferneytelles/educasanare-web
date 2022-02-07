import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';
import { Router } from '@angular/router';

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
    private route: Router,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.language = PageService.language;
    const project = this.storage.getStorage(SessionStorageService.keyProject);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.menu = project.footer.find(x => x.language === this.language).menu;
    // console.log(this.menu);
  }

  navigateUrl(url: string): void{
    // this.route.navigateByUrl()
    window.open(url, '_blank');
  }

  navigate(url: string): void{
    if (url.includes('http')) {
      this.navigateUrl(url);
    } else {
      this.route.navigate([`/${url}`]);
      window.scroll({top: 0, behavior: 'smooth'});
    }
  }

}
