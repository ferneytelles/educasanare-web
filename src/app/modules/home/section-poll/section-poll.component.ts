import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-section-poll',
  templateUrl: './section-poll.component.html',
  styleUrls: ['./section-poll.component.scss']
})
export class SectionPollComponent implements OnInit {

  labels: any;

  constructor(
    private route: Router,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
  }

  navigateToHelp(): void{
    this.route.navigate(['/ayuda']);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
