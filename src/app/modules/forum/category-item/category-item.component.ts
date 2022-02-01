import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumsService } from '@shared/services/forums.service';
import { AuthenticationService } from '@shared/services/authentication.service';
import to from 'await-to-js';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';
import { SessionService } from '@shared/services/session.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { URL_CDN } from '@env/environment';
import Swal from 'sweetalert2';
import { ContactService } from '@shared/services/contact.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  forums: Array<any>;
  profile: any;

  unsubscribe = new Subject<unknown>();
  order = 'new';
  page = 1;
  slug: string;
  category: any;
  labels: any;
  count: number;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private forumService: ForumsService,
    private authentication: AuthenticationService,
    private storage: SessionStorageService,
    private sessionService: SessionService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.slug = this.activeRoute.snapshot.params.id;
    this.getCategory();
    this.getForumsByCategory();
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.profile = this.sessionService.profile;
    this.sessionService.login.pipe(takeUntil(this.unsubscribe))
    .subscribe((data: boolean) => {
      this.profile = this.sessionService.profile;
      // console.log(this.profile);
    });
  }

  async getCategory(): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.getCategory(this.slug).toPromise()
    );
    if (error){
      if (error.status === 403) {
        await this.authentication.getToken();
        this.getCategory();
        return;
      }
      console.log(error);
    } else {
      this.category = response.results[0].category_metadata;
      this.category.file = `${URL_CDN}${this.category.file}?w=900`;
      // console.log(this.category);
      // this.getUsersImagesAndDate();
    }
  }

  async getForumsByCategory(): Promise<void>{
    const [error, response]: Array<any> = await to(
      this.forumService.getForums(this.slug, this.page, this.order).toPromise()
    );
    if (error){
      if (error.status === 403) {
        await this.authentication.getToken();
        this.getForumsByCategory();
        return;
      }
      console.log(error);
    } else {
      this.count = response.count;
      this.forums = response.results;
      // console.log(this.forums);
    }
  }

  changeFilter(element: any): void{
    this.order = element.target.value;
    console.log(this.order);
    this.getForumsByCategory();
  }

  pageChange(currentPage: number): void{
    this.page = currentPage;
    this.getForumsByCategory();
    window.scroll({top: 0});
  }

  navigate(value: string, isLogged?: boolean): void{
    if (isLogged && !!!this.profile){
      this.sessionService.modalSession.next(true);
    } else {
      const url = this.route.url;
      this.route.navigate([url + '/' + value]);
      window.scroll({top: 0, behavior: 'smooth'});
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

  async deleteForum(forum: any): Promise<void> {
    console.log(forum);
    // let [error, response]: Array<any> = [];
    await Swal.fire({
      title: this.labels.delete,
      text: this.labels.delete_question,
      confirmButtonText: this.labels.delete,
      cancelButtonText: this.labels.btn_cancel,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed){
        this.confirmDeleteForum(forum.id);
        // [error, response] = await to(
        //   this.forumService.deleteForum(forum.id).toPromise()
        // );
      }
    });

    // if (error){
    //   console.log(error);
    // } else {
    //   Swal.fire('Tema eliminado!');
    // }
  }

  async confirmDeleteForum(id: number): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.deleteForum(id).toPromise()
    );
    if (error){
      console.log(error);
    } else {
      this.getForumsByCategory();
      Swal.fire(this.labels.deleted_text);
    }
  }

}
