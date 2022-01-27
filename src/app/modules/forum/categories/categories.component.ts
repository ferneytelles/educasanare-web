import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumsService } from '@shared/services/forums.service';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any;
  // categories = [
  //   {
  //     img: 'assets/images/category1.png',
  //     title: 'robótica',
  //     slug: 'robotica',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
  //   },
  //   {
  //     img: 'assets/images/category2.png',
  //     title: 'laboratorio de física',
  //     slug: 'laboratorio-de-fisica',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
  //   },
  //   {
  //     img: 'assets/images/category3.png',
  //     title: 'biología',
  //     slug: 'biologia',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
  //   },
  //   {
  //     img: 'assets/images/category4.png',
  //     title: 'producción audiovisual',
  //     slug: 'produccion-audiovisual',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
  //   },
  // ];

  faces = [
    'assets/images/face1.jpg',
    'assets/images/face3.jpg',
    'assets/images/face2.jpg'
  ];
  labels: any;

  constructor(
    private route: Router,
    private forumService: ForumsService,
    private authentication: AuthenticationService,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.getListCategories();
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
  }

  navigate(value: string): void{
    this.route.navigate(['/foros/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

  async getListCategories(): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.getCategories().toPromise()
    );
    if (error){
      if (error.status === 403) {
        await this.authentication.getToken();
        this.getListCategories();
        return;
      }
      console.log(error);
    } else {
      this.categories = response.results;
      console.log(this.categories);
      this.getUsersImages();
    }
  }

  getUsersImages(): void {
    const userImages = [];
    this.categories.forEach((element) => {
      element.category_metadata?.forums.forEach((forum) => {
        userImages.push(forum.avatar);
      });
    });
  }

}
