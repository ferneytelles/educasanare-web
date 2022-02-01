import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@shared/services/authentication.service';
import { ContactService } from '@shared/services/contact.service';
import { ForumsService } from '@shared/services/forums.service';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { SessionService } from '@shared/services/session.service';
import to from 'await-to-js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { URL_MEDIA } from '@env/environment';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.scss']
})
export class ForumItemComponent implements OnInit, OnDestroy {

  profile: any;
  forum: any;
  category: any;

  unsubscribe = new Subject<unknown>();

  answers = [
    {
      own: false,
      img: 'assets/images/face1.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: true,
      img: 'assets/images/face3.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: false,
      img: 'assets/images/face2.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    }
  ];

  height = 60;
  @ViewChild('textArea') text: ElementRef;
  labels: any;
  slug: string;
  urlMedia: string;
  random: number;

  constructor(
    private route: Router,
    private actived: ActivatedRoute,
    private forumService: ForumsService,
    private authentication: AuthenticationService,
    private storage: SessionStorageService,
    private sessionService: SessionService,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.urlMedia = URL_MEDIA;
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.slug = this.actived.snapshot.params.forum;
    this.profile = this.sessionService.profile;
    this.sessionService.login.pipe(takeUntil(this.unsubscribe))
    .subscribe((data: boolean) => {
      this.profile = this.sessionService.profile;
      // console.log(this.profile);
    });
    // this.forum.own = this.route.url.includes('2');
    this.getForum();
  }

  navigate(value: string): void{
    const url = this.route.url.split('/');
    url.pop();
    this.route.navigate([url.join('/') + '/foro/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

  setHeight(): void{
    if (this.text.nativeElement.scrollHeight > this.height){
      this.height = this.text.nativeElement.scrollHeight + 2;
    }
    // console.log(this.text.nativeElement.scrollHeight);
    // console.log(this.text.nativeElement.getBoundingClientRect().height);
    // console.log(this.text);
  }

  async getForum(): Promise<any> {
    const [error, response]: Array<any> = await to(
      this.forumService.getForum(this.slug).toPromise()
    );
    if (error){
      if (error.status === 403) {
        await this.authentication.getToken();
        this.getForum();
        return;
      }
      console.log(error);
    } else {
      this.forum = response.results[0].forum_metadata;
      console.log(this.forum);
      // this.getCategory();
    }
  }

  // async getCategory(): Promise<void> {
  //   console.log(this.forum.category);
  //   const [error, response]: Array<any> = await to(
  //     this.forumService.getCategory(this.forum.category).toPromise()
  //   );
  //   if (error){
  //     if (error.status === 403) {
  //       await this.authentication.getToken();
  //       this.getCategory();
  //       return;
  //     }
  //     console.log(error);
  //   } else {
  //     console.log(response);
  //     this.category = response.results[0].category_metadata;
  //   }
  // }

  getRandomArbitrary(): void {
    this.random = Math.random() * (999999999 - 999) + 999;
  }

  async sendForum(): Promise<void>{
    if (!!this.profile){
      this.getRandomArbitrary();
      const dataForum = new FormData();
      dataForum.append('parent', this.forum.id);
      dataForum.append('category', this.forum.category);
      dataForum.append('title', this.forum.title + this.random.toString(10));
      dataForum.append('content', this.text.nativeElement.value);
      const [error, response]: Array<any> = await to(
        this.forumService.createForum(dataForum).toPromise()
      );
      if (error) {
        if (error.status === 403) {
          await this.authentication.getToken();
          this.sendForum();
          return;
        }
        if (error.status === 500){
          this.sendForum();
          return;
        }
        console.log(error);
      } else {
        console.log(response);
        // this.formForum.reset();
        // await Swal.fire('Publicado con éxito!');
        this.text.nativeElement.value = '';
        this.getForum();
      }
    } else {
      this.sessionService.modalSession.next(true);
    }
  }


  async reportForum(forum: any): Promise<void> {
    await Swal.fire({
      title: this.labels.text_report,
      input: 'textarea',
      // inputLabel: 'Cuentanos las razones de la denuncia',
      inputPlaceholder: this.labels.placeholder_report,
      showCancelButton: true,
      cancelButtonText: this.labels.btn_cancel,
      confirmButtonText: this.labels.text_report,
    }).then(async (result) => {
      if (result.isConfirmed){
        const body = `Razón de la denuncia: ${+!!result.value ? result.value : 'Vacío'} > > > informacion del foro: {Id: ${forum.id}, Título: ${forum.title}, Slug: ${forum.slug}, Usuario creador: ${forum.user}}`;

        const data = new FormData();
        data.append('email', this.profile.email);
        data.append('name', this.profile.username);
        data.append('subject', 'Denuncia');
        data.append('body', body);

        const [error, response]: Array<any> = await to(
          this.contactService.sendContactMail(data).toPromise()
        );

        if (response) {
          Swal.fire(this.labels.report_sent);
        }
      }
    });
  }

  async updateForum(forum: any): Promise<void> {
    await Swal.fire({
      title: this.labels.tooltip_edit,
      input: 'textarea',
      inputValue: forum.content,
      confirmButtonText: this.labels.tooltip_edit,
      cancelButtonText: this.labels.btn_cancel,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed){
        console.log(result.value);
        const dataForum = new FormData();
        dataForum.append('category', this.forum.category);
        dataForum.append('title', forum.title);
        dataForum.append('content', result.value);
        dataForum.append('parent', this.forum.id);

        this.confirmUpdateForum(dataForum, forum.id);
      }
    });
  }

  async confirmUpdateForum(dataForum: FormData, id: number): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.editForum(dataForum, id).toPromise()
    );
    if (error) {
      if (error.status === 403) {
        await this.authentication.getToken();
        this.confirmUpdateForum(dataForum, id);
        return;
      }
      console.log(error);
    } else {
      console.log(response);
      this.getForum();
    }
  }

  async deleteForum(forum: any, isParent: boolean): Promise<void> {
    console.log(forum);
    // let [error, response]: Array<any> = [];
    await Swal.fire({
      title: this.labels.delete,
      text: +isParent ? this.labels.delete_question : this.labels.delete_question_comment,
      confirmButtonText: this.labels.delete,
      cancelButtonText: this.labels.btn_cancel,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed){
        this.confirmDeleteForum(forum.id, isParent);
      }
    });
  }

  async confirmDeleteForum(id: number, isParent: boolean): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.deleteForum(id).toPromise()
    );
    if (error){
      console.log(error);
    } else {
      if (isParent){
        await Swal.fire(this.labels.deleted_text);
        this.location.back();
      } else {
        Swal.fire(this.labels.delete_comment);
        this.getForum();
      }
    }
  }

  cancelText(): void{
    this.text.nativeElement.value = '';
    this.height = 60;
  }

  ngOnDestroy(): void {
    //  Called once, before the instance is destroyed.
    //  Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
