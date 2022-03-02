import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/services/authentication.service';
import { PageService } from '@shared/services/page.service';
import { SearchService } from '@shared/services/search.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';

@Component({
  selector: 'app-help-post',
  templateUrl: './help-post.component.html',
  styleUrls: ['./help-post.component.scss']
})
export class HelpPostComponent implements OnInit {

  @ViewChild('video') video: ElementRef;
  post: any;
  videos: Array<any>;
  photos: Array<any>;
  tags: string;
  height: number;
  slug: string;
  labels: any;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private storage: SessionStorageService,
    private search: SearchService,
    private authentication: AuthenticationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.slug = this.activeRoute.snapshot.params.slug;
    // console.log(this.activeRoute.snapshot.params.slug);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.getPost();
  }

  async getPost(): Promise<void>{
    const [error, post] = await to(
      this.search.getPost(this.slug, PageService.language).toPromise()
    );
    // @ts-ignore
    if (error && error.status === 403){
      await this.authentication.getToken();
      await this.getPost();
      return;
    }
    this.post = post.results[0].post_metadata;
    // console.log(this.post);
    if (this.post.gallery){
      this.videos = this.post.gallery.filter(x => x.type === 'VIDEO');
      this.photos = this.post.gallery.filter(x => x.type === 'PHOTO');
    }
    if (this.post.tags.length > 0){
      this.tags = this.post.tags[0].name;
      this.post.tags.slice(1).forEach(element => {
        this.tags = this.tags + ',  ' + element.name;
      });
      this.tags = this.tags + '.';
    }
  }

  goBack(): void{
    // this.route.navigate(['/buscador']);
    this.location.back();
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
