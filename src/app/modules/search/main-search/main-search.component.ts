import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit, OnDestroy {

  @ViewChild('tag') tagInput: ElementRef;
  posts: Array<any>;
  tag: string;
  unsubscribe = new Subject<unknown>();
  realized = false;
  pagination: any;
  page = 1;
  language: string;

  constructor(
    private search: SearchService,
    private storage: SessionStorageService,
    private route: Router,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.language = PageService.language;
    this.getTagSearch();
    this.search.tagSearch.pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTagSearch();
    });
  }

  async getTagSearch(): Promise<void> {
    this.realized = false;
    if (this.storage.isStorage(SessionStorageService.keySearch)){
      this.tag = this.storage.getStorage(SessionStorageService.keySearch);
      this.tag = this.tag.replace(' ', '_');
      await this.getResults();
      // this.posts = [];
      // this.posts = this.storage.getStorage(SessionStorageService.keyPages).find(x => x.slug === 'inicio').sections[1].posts;
      // console.log(this.posts);
      // console.log(this.tag);
      this.realized = true;
    } else {
      this.route.navigate(['/inicio']);
    }
  }

  async getResults(): Promise<void> {
    const [error, result] = await to(this.search.searchPosts(this.tag, this.language, this.page).toPromise());
    // @ts-ignore
    if (error && error.status === 403){
      await this.authentication.getToken();
      await this.getResults();
      return;
    }
    this.pagination = result;
    this.posts = result.results;
    // console.log(result);
  }

  onSubmit(): void{
    this.storage.setStorage(
      SessionStorageService.keySearch,
      this.tagInput.nativeElement.value
    );
    this.search.tagSearch.next();
    this.tagInput.nativeElement.value = '';
    console.log(this.tagInput.nativeElement.value);
  }

  navigate(value: string): void{
    this.route.navigate(['/buscador/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

  pageChange(page: number): void{
    // evento de cambio de página
    console.log(page);
    this.page = page;
    this.getResults();
    window.scroll({top: 0});
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
