import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  title: string;
  unsubscribe = new Subject<unknown>();
  constructor(
    private search: SearchService,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.getTag();
    this.search.tagSearch.pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTag();
    });
    // console.log(this.search.tag);
  }

  getTag(): void{
    // const tag = this.storage.getStorage(SessionStorageService.keySearch);
    // this.title = `Resultados de búsqueda para: "${tag}"`;
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
