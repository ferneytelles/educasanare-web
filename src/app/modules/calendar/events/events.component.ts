import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';
import { SearchService } from '@shared/services/search.service';
import { AuthenticationService } from '@shared/services/authentication.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() section: any;
  events: Array<any>;
  page = 1;
  error: boolean;
  count = 0;
  labels: any;
  date = 'next';

  constructor(
    private storage: SessionStorageService,
    private search: SearchService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    // console.log(this.section);
    this.getEventsByPage(this.date);
  }

  async getEventsByPage(date: string): Promise<void> {
    this.error = false;
    this.events = null;
    const [err, result]: Array<any> = await to(
      this.search.getEventsBySection(this.section.slug, PageService.language, this.page, date).toPromise()
    );
    if (err ){
      if (err.status === 403){
        await this.authentication.getToken();
        await this.getEventsByPage(date);
        return;
      }
      // console.log(err);
      this.error = true;
      return;
    }
    this.count = result.count;
    this.events = result.results;
    // console.log(this.events);
  }

  changeDate(date: string): void{
    this.date = date;
    this.getEventsByPage(this.date);
  }

  pageChange(currentPage: number): void{
    this.page = currentPage;
    this.getEventsByPage(this.date);
    window.scroll({top: 500});
  }

}
