import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  content: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'calendario');
    // console.log(this.content);
  }

}
