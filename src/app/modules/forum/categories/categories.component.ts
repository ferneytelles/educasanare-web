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
      // console.log(error);
    } else {
      this.categories = response.results;
      // console.log(this.categories);
      this.getUsersImagesAndDate();
    }
  }

  getUsersImagesAndDate(): void {
    this.categories.forEach((element) => {
      if (element.category_metadata.forums){
        const userImages = [];
        const dates = [];
        element.category_metadata?.forums.forEach((forum) => {
          userImages.push(forum.avatar);
          const aux = this.transformToDate(forum.creation_date);
          const dateForum = new Date(
            aux[0], aux[1], aux[2], aux[3], aux[4]
          );
          dates.push(dateForum);
          if (forum.children){
            forum.children.forEach((child) => {
              userImages.push(child.avatar);
              const aux2 = this.transformToDate(child.creation_date);
              const dateChild = new Date(
                aux2[0], aux2[1], aux2[2], aux2[3], aux2[4]
              );
              // console.log(aux2, '', dateChild.toLocaleDateString());
              dates.push(dateChild);
            });
          }
        });
        const maxDate = Math.max(...dates);
        dates.forEach((value) => {
          if (value.getTime() === maxDate){
            const now = new Date();
            if (value.toLocaleDateString() === now.toLocaleDateString()){
              element.category_metadata.activity = 'hoy, ' + value.toLocaleTimeString();
            } else{
              element.category_metadata.activity = value.toLocaleDateString();
            }
            // console.log(value.toLocaleDateString());
            // console.log(now.toLocaleDateString());
          }
        });
        element.category_metadata.users = [...new Set(userImages)];
        element.category_metadata.last_topic = element.category_metadata.forums[element.category_metadata.forums.length - 1];
      }
    });
  }

  transformToDate(date: string): Array<number>{
    const arrDate = [];
    arrDate.push(parseInt(date.slice(6, 10), 10));
    arrDate.push(parseInt(date.slice(3, 5), 10) - 1);
    arrDate.push(parseInt(date.slice(0, 2), 10));
    arrDate.push(parseInt(date.slice(11, 13), 10));
    arrDate.push(parseInt(date.slice(14, 16), 10));
    return arrDate;
  }


}
