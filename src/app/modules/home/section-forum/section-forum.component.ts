import { Component, OnInit } from '@angular/core';
import { ForumsService } from '@shared/services/forums.service';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { AuthenticationService } from '@shared/services/authentication.service';
import to from 'await-to-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-forum',
  templateUrl: './section-forum.component.html',
  styleUrls: ['./section-forum.component.scss']
})
export class SectionForumComponent implements OnInit {

  // forums = [
  //   {
  //     img: 'assets/images/face1.jpg',
  //     user: 'Prof_01',
  //     date: new Date(2021,9,11,10,15),
  //     category: 'robotica',
  //     title: 'Titulo del tema del foro',
  //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas accusamus dolorem, quam numquam minima. Necessitatibus id doloremque, commodi voluptates at sint cumque praesentium molestias. Exercitationem illo reiciendis neque dicta.'
  //   },
  //   {
  //     img: 'assets/images/face2.jpg',
  //     user: 'profile2345',
  //     date: new Date(2021, 8, 15, 18, 24),
  //     category: 'producción audiovisual',
  //     title: 'Titulo del tema del foro',
  //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas accusamus dolorem, quam numquam minima. Necessitatibus id doloremque, commodi voluptates at sint cumque praesentium molestias. Exercitationem illo reiciendis neque dicta.'
  //   }
  // ];

  forums: any;

  labels: any;

  constructor(
    private route: Router,
    private storage: SessionStorageService,
    private forumService: ForumsService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.getForums();
  }

  async getForums(): Promise<void>{
    const [error, response]: Array<any> = await to(
      this.forumService.getForumsForHome('new').toPromise()
    );
    if (error){
      if (error.status === 403) {
        await this.authentication.getToken();
        this.getForums();
        return;
      }
      console.log(error);
    } else {
      this.forums = response.results.slice(0, 2);
      console.log(this.forums);
    }
  }

  navigateToForums(): void{
    this.route.navigate(['/foros']);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
