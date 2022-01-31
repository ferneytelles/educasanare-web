import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';
import { SearchService } from '@shared/services/search.service';
import { AuthenticationService } from '@shared/services/authentication.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @ViewChild('video') video: ElementRef;
  post: any;
  videos: Array<any>;
  photos: Array<any>;
  tags: string;
  height: number;
  slug: string;
  language: string;
  labels: any;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private storage: SessionStorageService,
    private search: SearchService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.language = PageService.language;
    this.slug = this.activeRoute.snapshot.params.slug;
    console.log(this.activeRoute.snapshot.params.slug);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    // this.post = this.storage.getStorage(SessionStorageService.keyPages)
    // .find(x => x.slug === 'inicio').sections[1].posts.find(y => y.slug === slug);
    this.getPost();
  }

  async getPost(): Promise<void>{
    const [error, post] = await to(
      this.search.getPost(this.slug, this.language).toPromise()
    );
    // @ts-ignore
    if (error && error.status === 403){
      await this.authentication.getToken();
      await this.getPost();
      return;
    }
    console.log(post);
    this.post = post.results[0].post_metadata;
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
    this.route.navigate(['/buscador']);
  }

}
