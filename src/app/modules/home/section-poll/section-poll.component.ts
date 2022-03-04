import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-section-poll',
  templateUrl: './section-poll.component.html',
  styleUrls: ['./section-poll.component.scss'],
})
export class SectionPollComponent implements OnInit {
  labels: any;
  project: any;
  linkManual: string;

  constructor(private route: Router, private storage: SessionStorageService) {}

  ngOnInit(): void {
    this.project = this.storage.getStorage(SessionStorageService.keyProject);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[
      PageService.language
    ];
    this.linkManual = this.project.footer
      .find((x) => x.language === PageService.language)
      .menu.find((x) => x.name === 'Ayuda')
      .children.find((x) => x.name === 'Manual instruccional').url;
  }

  navigateToHelp(): void {
    this.route.navigate(['/ayuda']);
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
