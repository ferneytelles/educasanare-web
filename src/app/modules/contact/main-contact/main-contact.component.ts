import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '@shared/services/contact.service';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';
import Swal from 'sweetalert2';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {

  content: any;
  information: string;
  formContact: FormGroup;
  errorEmail: string;
  errorBody: string;
  labels: any;

  constructor(
    private fb: FormBuilder,
    private storage: SessionStorageService,
    private contactService: ContactService,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'contacto');
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.information = this.content.sections[0].posts[0]?.description;
    // console.log(this.information);
    this.createForm();
  }

  createForm(): void{
    this.formContact = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      subject: ['PQRS', [Validators.required]],
      body: []
    });
    // console.log(this.formContact);
  }

  async sendRequest(): Promise<void> {
    this.errorEmail = null;
    this.errorBody = null;
    const data = this.formContact.getRawValue();
    if (!data.body){
      delete data.body;
    }
    // console.log(data);
    const [error, result]: Array<any> = await to(
      this.contactService.sendContactMail(data).toPromise()
    );
    if (error){
      // console.log(error);
      if (error.status === 403){
        await this.authentication.getToken();
        this.sendRequest();
        return;
      }
      if (error.error.email){
        this.errorEmail = '* ' + error.error.email[0];
      }
      if (error.error.body) {
        this.errorBody = '* ' + error.error.body[0];
      }
    }else{
      // console.log(result);
      Swal.fire({
        icon: 'success',
        text: 'Mensaje enviado, pronto te llegará una respuesta al correo electrónico'
      }).then((willDelete) => {
        if (willDelete) {
          this.formContact.reset();
          this.formContact.get('subject').setValue('PQRS');
        }
      });
    }
  }

}
