import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';
import { Router } from '@angular/router';
import { URL_MEDIA } from '@env/environment.prod';

@Component({
  selector: 'app-edu-content',
  templateUrl: './edu-content.component.html',
  styleUrls: ['./edu-content.component.scss'],
})
export class EduContentComponent implements OnInit {
  @Input() section: any;

  labels: any;
  url = URL_MEDIA;

  urlYoutube = '';

  constructor(
    private route: Router,
    private storage: SessionStorageService,
    private page: PageService
  ) {}

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[
      PageService.language
    ];
    // console.log(this.section);
  }

  navigate(post: any): void {
    // console.log(post);
    if (post.external_url) {
      if (post.external_url.includes('youtube')) {
        this.urlYoutube = post.external_url;
        this.page.modalVideo.next(post.external_url);
      } else {
        window.open(post.external_url, '_blank');
      }
    } else {
      this.route.navigate([`/buscador/${post.slug}`]);
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }
}
