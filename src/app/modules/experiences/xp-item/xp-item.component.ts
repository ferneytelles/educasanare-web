import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@shared/services/search.service';
import to from 'await-to-js';
import { PageService } from '@shared/services/page.service';
import { AuthenticationService } from '@shared/services/authentication.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-xp-item',
  templateUrl: './xp-item.component.html',
  styleUrls: ['./xp-item.component.scss'],
})
export class XpItemComponent implements OnInit {
  post: any;
  slug: string;
  language: string;
  images = [];
  // images = [
  //   'assets/images/xp1.png',
  //   'assets/images/xp2.png',
  //   'assets/images/xp3.png'
  // ];

  // date = new Date(2021, 8, 15, 18, 24);

  // tslint:disable-next-line: max-line-length
  // text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente suscipit. Officia neque amet corporis similique illo ea voluptatem eos. Animi praesentium quia nulla sunt error ex atque eum, omnis officia itaque ducimus aliquam quo eligendi voluptas exercitationem magni, rem tempore ipsum quidem adipisci dolore consequuntur provident eius facilis. Repudiandae voluptatibus neque quia autem mollitia delectus assumenda quam laboriosam, eligendi, consequuntur quibusdam! Atque numquam, modi, sed ipsa aperiam amet ex velit nam veritatis obcaecati itaque laborum eius tempora molestiae ab, facere reprehenderit culpa fuga odio sequi non facilis corporis labore? In aspernatur ab qui voluptatem quisquam? Deleniti vel nulla maiores.';
  labels: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private authentication: AuthenticationService,
    private storage: SessionStorageService,
    private search: SearchService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.language = PageService.language;
    this.slug = this.activeRoute.snapshot.params.id;
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[
      PageService.language
    ];
    this.getPost();
  }

  async getPost(): Promise<void> {
    const [err, post] = await to(
      this.search.getPost(this.slug, this.language).toPromise()
    );
    // @ts-ignore
    if (err && err.status === 403) {
      await this.authentication.getToken();
      await this.getPost();
      return;
    }
    this.post = post.results[0].post_metadata;
    // console.log(this.post);
    this.setImagesCarousel();
  }

  setImagesCarousel(): void {
    if (this.post.image) {
      this.images[0] = this.post.image;
    }
    if (this.post.gallery) {
      const aux = [];
      this.post.gallery.forEach((element) => {
        if (element.type === 'PHOTO') {
          aux.push(element?.image);
        }
      });
      this.images = this.images.concat(aux);
      // console.log(this.images);
    }
  }

  backRedirect(): void {
    this.location.back();
  }
}
