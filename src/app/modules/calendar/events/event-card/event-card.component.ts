import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event: any;
  tags: string;
  labels: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    if (this.event.tags.length > 0){
      this.tags = this.event.tags[0].name;
      this.event.tags.slice(1).forEach(element => {
        this.tags = this.tags + ',  ' + element.name;
      });
      this.tags = this.tags + '.';
    }
  }

}
