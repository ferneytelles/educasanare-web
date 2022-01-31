import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForumsService } from '@shared/services/forums.service';
import { AuthenticationService } from '@shared/services/authentication.service';
import to from 'await-to-js';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-forum',
  templateUrl: './new-forum.component.html',
  styleUrls: ['./new-forum.component.scss']
})
export class NewForumComponent implements OnInit {

  slugCategory: string;
  slugForum: string;
  forum: any;
  category: any;
  height = 154;
  @ViewChild('textArea') text: ElementRef;
  @ViewChild('label') labelFile: ElementRef;
  labels: any;
  file: any;
  formForum: FormGroup;

  constructor(
    private route: Router,
    private actived: ActivatedRoute,
    private forumService: ForumsService,
    private authentication: AuthenticationService,
    private storage: SessionStorageService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    const url = this.route.url.split('/');
    this.slugCategory = url[2];
    this.slugForum = this.actived.snapshot.params.slug;
    this.getCategory();
    this.createForm();
    console.log(this.slugForum);
  }

  createForm(): void{
    this.formForum = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(1)]],
    });
    if (this.slugForum !== 'nuevo'){
      this.getForum();
    }
  }

  async getForum(): Promise<any> {
    const [error, response]: Array<any> = await to(
      this.forumService.getForum(this.slugForum).toPromise()
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
      this.formForum.get('title').setValue(this.forum.title);
      this.formForum.get('content').setValue(this.forum.content);
      const file = this.forum.file.split('/');
      this.labelFile.nativeElement.innerHTML = file.pop();
    }
  }

  async getCategory(): Promise<void> {
    const [error, response]: Array<any> = await to(
      this.forumService.getCategory(this.slugCategory).toPromise()
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
    }
  }

  setHeight(): void{
    if (this.text.nativeElement.scrollHeight > this.height){
      this.height = this.text.nativeElement.scrollHeight + 2;
    }
  }

  goToBack(): void{
    // this.text.nativeElement.value = '';
    // this.height = 154;
    // const url = this.route.url.split('/');
    // url.pop();
    // url.pop();
    // this.route.navigate([url.join('/')]);
    this.location.back();
    window.scroll({top: 0, behavior: 'smooth'});
  }

  changeFile(input: any): void{
    console.log(input);
    console.log(input.target.files[0].name);
    const ext = input.target.files[0].type.split('.').shift();
    const size = input.target.files[0].size;
    console.log(size);
    console.log(ext);

    if (ext.includes('image')){
      if (size > 2097152){
        Swal.fire({
          text: 'El archivo de imagen no puede superar 2MB',
          icon: 'warning',
        });
        input.target.value = '';
        // input.target.files.shift();
        this.labelFile.nativeElement.innerHTML = '';
      } else{
        this.labelFile.nativeElement.innerHTML = input.target.files[0].name;
        this.file = input.target.files[0];
      }
    } else {
      if (size > 20971520){
        Swal.fire({
          text: 'El archivo de video no puede superar 20MB',
          icon: 'warning',
        });
        // alert('El archivo de video no puede superar 20MB');
        input.target.value = '';
        // input.target.files.shift();
        this.labelFile.nativeElement.innerHTML = '';
      } else{
        this.labelFile.nativeElement.innerHTML = input.target.files[0].name;
        this.file = input.target.files[0];
      }
    }
  }

  async sendForum(): Promise<void>{
    const dataOfForm = this.formForum.getRawValue();
    const dataNewForum = new FormData();
    dataNewForum.append('category', this.category.id);
    dataNewForum.append('title', dataOfForm.title);
    dataNewForum.append('content', dataOfForm.content);
    if (!!this.file) {
      dataNewForum.append('file', this.file);
    }

    const [error, response]: Array<any> = await to(
      this.forumService.createForum(dataNewForum).toPromise()
    );
    if (error) {
      if (error.status === 403) {
        await this.authentication.getToken();
        this.sendForum();
        return;
      }
      console.log(error);
    } else {
      console.log(response);
      // this.formForum.reset();
      await Swal.fire('Publicado con éxito!');
      this.goToBack();
    }
  }

}
