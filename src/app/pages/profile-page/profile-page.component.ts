import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '@shared/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import to from 'await-to-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: any;
  @ViewChild('image') image: ElementRef;
  objectURL: any;
  formUser: FormGroup;
  imageFile: any;
  userEditing = false;
  passwordEditing = false;

  // mensajes de error en la actualización de los datos
  errorUsername: string;
  errorNowPassword: string;
  errorNonFieldErrors: string;

  constructor(
    private sessionService: SessionService,
    private authentication: AuthenticationService,
    private route: Router,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.createForm();
    this.getData();
    // if (this.sessionService.file){
    //   this.objectURL = URL.createObjectURL(this.sessionService.file);
    //   this.user.img = this.objectURL;
    // }
  }

  async getData(): Promise<void> {
    if (await this.sessionService.getInformationUser()) {
      this.user = this.sessionService.profile;
      console.log(this.user);
      this.resetFormValues();
    } else {
      this.route.navigate(['/inicio']);
    }
  }

  resetFormValues(): void{
    this.formUser.get('username').setValue(this.user.username);
    this.formUser.get('email').setValue(this.user.email);
    this.formUser.get('first_name').setValue(this.user.first_name);
    this.formUser.get('last_name').setValue(this.user.last_name);
    this.formUser.get('now_password').setValue('');
    this.formUser.get('password').setValue('');
    this.formUser.get('re_password').setValue('');
  }

  enableEditing(): void{
    this.userEditing = true;
    this.formUser.get('username').enable();
    // this.formUser.get('email').enable();
    this.formUser.get('first_name').enable();
    this.formUser.get('last_name').enable();
  }

  disableEditing(): void{
    this.userEditing = false;
    this.formUser.get('username').disable();
    // this.formUser.get('email').disable();
    this.formUser.get('first_name').disable();
    this.formUser.get('last_name').disable();
  }

  createForm(): void{
    this.formUser = this.fb.group({
      avatar: [],
      username: [{value: '', disabled: true}, [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
      email: [{value: '', disabled: true}, [Validators.required, Validators.minLength(4)]],
      first_name: [{value: '', disabled: true}],
      last_name: [{value: '', disabled: true}],
      now_password: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      re_password: ['', [Validators.required, Validators.minLength(8)]]
    });
    // console.log(this.formUser);
  }

  changeFile(element: any): void{
    // console.log(element);
    if (element.target.files[0].size > 2097152){
      Swal.fire({
        icon: 'warning',
        text: 'El archivo supera el tamaño máximo'
      });
    } else {
      this.objectURL = URL.createObjectURL(element.target.files[0]);
      // this.user.avatar = this.objectURL;
      this.image.nativeElement.src = this.objectURL;
      this.imageFile = element.target.files[0];
    }
  }

  imageReader(file: any): any {
    return new Promise<any>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // console.log(reader);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  }

  resetErrors(): void{
    this.errorUsername = null;
    this.errorNowPassword = null;
    this.errorNonFieldErrors = null;
  }

  async sendData(): Promise<void> {
    this.resetErrors();
    const userData = new FormData();
    Object.keys(this.formUser.controls).forEach(key => {
      userData.append(key, this.formUser.get(key).value);
    });
    if (this.imageFile){
      userData.set('avatar', this.imageFile);
    } else{
      userData.delete('avatar');
    }

    if (!this.passwordEditing) {
      userData.delete('now_password');
      userData.delete('password');
      userData.delete('re_password');
      console.log('eliminó los campos de contraseña');
    }
    // console.log(userData.get('now_password'));

    const [error, result]: Array<any> = await to(
      this.sessionService.updateUser(userData).toPromise()
    );
    if (error){
      console.log(error);
      if (error.status === 403){
        await this.authentication.getToken();
        this.sendData();
        return;
      }
      if (error.error.username) {
        this.errorUsername = error.error.username[0];
      }
      if (error.error.now_password){
        this.errorNowPassword = error.error.now_password[0];
      }
      if (error.error.non_field_errors){
        this.errorNonFieldErrors = error.error.non_field_errors[0];
      }
    }else{
      console.log(result);
      window.location.reload();
    }
  }

  async offSession(): Promise<void> {
    this.route.navigate(['/inicio']);
    window.scroll({top: 0, behavior: 'smooth'});
    await this.authentication.tokenAccess(this.authentication.formData).toPromise();
    this.sessionService.login.next(false);
  }

  cancelAction(): void{
    this.resetErrors();
    this.disableEditing();
    this.passwordEditing = false;
    this.imageFile = null;
    this.image.nativeElement.src = +!!this.user.avatar ? this.user.avatar : 'assets/images/face0.png';
    this.resetFormValues();
  }
}
