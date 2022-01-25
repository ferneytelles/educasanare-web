import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import to from 'await-to-js';
import { AuthenticationService } from '@shared/services/authentication.service';

@Component({
  selector: 'app-modal-session',
  templateUrl: './modal-session.component.html',
  styleUrls: ['./modal-session.component.scss']
})
export class ModalSessionComponent implements OnInit, OnDestroy {

  view = 0;
  formUser: FormGroup;
  formRestore: FormGroup;
  unsubscribe = new Subject();
  @ViewChild('session') modalSession: any;
  email: string;
  message: string;
  loginError: string;

  constructor(
    private modal: NgbModal,
    private sessionService: SessionService,
    private route: Router,
    private fb: FormBuilder,
    private authentication: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.sessionService.modalSession.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.view = 0;
      this.openModal();
    });
    this.createFrom();
  }


  openModal(): void{
    this.modal.open(this.modalSession, {windowClass: 'modal-session', centered: true, beforeDismiss: this.onDismiss});
  }

  onDismiss = async (): Promise<boolean> => {
    this.formUser.reset();
    this.formRestore.reset();
    this.loginError = null;
    this.message = null;
    return true;
  }

  createFrom(): void{
    this.formUser = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.formRestore = this.fb.group({
      emailRestore: ['']
    });
    // this.readChanges();
  }

  readChanges(): void{
    Object.keys(this.formUser.controls).forEach(key => {
      // console.log(key);
      // this.formUser.get(key).valueChanges.subscribe(value => {
      //   console.log(value);
      // });
    });
  }

  async valid(): Promise<void>{
    // const data = this.formUser.getRawValue();
    const data = this.formUser.getRawValue();
    const [err, response] = await to(
      this.authentication.tokenAccess(data).toPromise()
    );
    // console.log(response, err);
    if (response){
      // const [error, information] = await to(
      //   this.sessionService.dataUser().toPromise()
      // );
      if (await this.sessionService.getInformationUser()){
        // this.sessionService.profile = information[0];
        this.loginError = null;
        // this.sessionService.login.next(true);
        window.scroll({top: 0, behavior: 'smooth'});
        this.route.navigate(['/perfil']);
        this.modal.dismissAll();
      } else {
        // await this.authentication.tokenAccess(this.authentication.formData).toPromise();
        this.loginError = 'usuario no permitido';
      }
    } else {
      // @ts-ignore
      this.loginError = err.error.detail;
    }
    // tslint:disable-next-line: max-line-length
    // if ((data.user === this.sessionService.profile.user || data.user === this.sessionService.profile.email) && (data.password === this.sessionService.profile.password)){
    //   this.sessionService.session = true;
    //   this.sessionService.login.next(true);
    //   window.scroll({top: 0, behavior: 'smooth'});
    //   this.route.navigate(['/perfil']);
    //   this.modal.dismissAll();
    //   this.formUser.setValue({user: '', password: ''});
    // } else {
    //   alert(
    //     'el usuario de prueba es: ' + this.sessionService.profile.user + ' y la contraseña es: ' + this.sessionService.profile.password
    //     );
    // }
  }

  async getRestore(): Promise<void> {
    const data = this.formRestore.getRawValue();
    const [error, response] = await to(
      this.sessionService.restorePassword(data.emailRestore).toPromise()
    );
    if (response){
      this.message = 'Enviamos un correo electrónico para restablecer la contraseña a';
      this.email = data.emailRestore;
      this.view = 2;
      console.log(response);
    } else {
      // @ts-ignore
      // console.log(error.error.email);
      // @ts-ignore
      this.message = error.error.email[0];
      console.log(error);
    }
  }

  goBack(): void{
    this.view = 0;
    this.formUser.reset();
    this.formRestore.reset();
  }


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
