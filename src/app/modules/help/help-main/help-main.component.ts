import { Component, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SearchService } from '@shared/services/search.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-main',
  templateUrl: './help-main.component.html',
  styleUrls: ['./help-main.component.scss']
})
export class HelpMainComponent implements OnInit {

  labels: any;
  posts: any;
  count: any;
  page = 1;

  constructor(
    private route: Router,
    private storage: SessionStorageService,
    private search: SearchService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.getPosts();
  }

  async getPosts(): Promise<any> {
    const [error, result] = await to(this.search.getPostsBySection('ayuda', PageService.language, this.page, 'new').toPromise());
    // @ts-ignore
    if (error && error.status === 403){
      await this.authentication.getToken();
      await this.getPosts();
      return;
    }
    this.count = result.count;
    this.posts = result.results;
    console.log(this.posts);
  }

  pageChange(page: number): void{
    // evento de cambio de página
    console.log(page);
    this.page = page;
    this.getPosts();
    window.scroll({top: 0});
  }

  navigatePost(value: string): void{
    this.route.navigate(['/ayuda/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
