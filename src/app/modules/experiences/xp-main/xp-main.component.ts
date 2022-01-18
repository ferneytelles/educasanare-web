import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '@shared/services/session-storage.service';
import to from 'await-to-js';
import { SearchService } from '@shared/services/search.service';
import { PageService } from '@shared/services/page.service';
import { AuthenticationService } from '@shared/services/authentication.service';

@Component({
  selector: 'app-xp-main',
  templateUrl: './xp-main.component.html',
  styleUrls: ['./xp-main.component.scss']
})
export class XpMainComponent implements OnInit {

  content: any;
  xp = [
    {
      slug: 'xp-1',
      img: 'assets/images/xp1.png',
      date: new Date(2021, 7, 23),
      title: 'Loren Impsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis.'
    },
    {
      slug: 'xp-2',
      img: 'assets/images/xp2.png',
      date: new Date(2021, 8, 9),
      title: 'Quod eum rerum excepturi unde ipsam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate recusandae iste distinctio voluptas hic, sit cumque.'
    },
    {
      slug: 'xp-3',
      img: 'assets/images/xp3.png',
      date: new Date(2021, 8, 19),
      title: 'suscipit ipsa perspiciatis reiciendis',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate.'
    },
    {
      slug: 'xp-4',
      img: 'assets/images/xp1.png',
      date: new Date(2021, 7, 23),
      title: 'Loren Impsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis.'
    },
    {
      slug: 'xp-5',
      img: 'assets/images/xp2.png',
      date: new Date(2021, 8, 9),
      title: 'Quod eum rerum excepturi unde ipsam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate recusandae iste distinctio voluptas hic, sit cumque.'
    },
    {
      slug: 'xp-6',
      img: 'assets/images/xp3.png',
      date: new Date(2021, 8, 19),
      title: 'suscipit ipsa perspiciatis reiciendis',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate.'
    }
  ];
  page = 1;
  slugSection: string;
  experiences: Array<any>;
  language: string;
  error: boolean;
  count = 0;
  message: any;

  constructor(
    private search: SearchService,
    private route: Router,
    private storage: SessionStorageService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.language = PageService.language;
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'experiencias');
    // console.log(this.content);
    this.slugSection = this.content.sections[0]?.slug;
    // console.log(this.slugSection);
    this.error = false;
    this.getPostsByPage();
  }

  async getPostsByPage(): Promise<void> {
    this.experiences = null;
    const [err, result] = await to(
      this.search.getPostsBySection(this.slugSection, this.language, this.page).toPromise()
    );
    // @ts-ignore
    if (err ){
      const [errToken, token] = await to(this.authentication.getToken());
      if (errToken){
        console.log(errToken);
        this.error = true;
        return;
      }
      await this.getPostsByPage();
      this.error = true;
      return;
    }
    this.count = result.count;
    this.experiences = result.results;
  }

  pageChange(currentPage: number): void{
    this.page = currentPage;
    this.getPostsByPage();
    window.scroll({top: 0});
  }


  navigate(value: string): void{
    window.scroll({top: 0, behavior: 'smooth'});
    this.route.navigate([value]);
  }

}
