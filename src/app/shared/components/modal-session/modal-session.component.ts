import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import to from 'await-to-js';

@Component({
  selector: 'app-modal-session',
  templateUrl: './modal-session.component.html',
  styleUrls: ['./modal-session.component.scss']
})
export class ModalSessionComponent implements OnInit, OnDestroy {

  view = 0;
  formUser: FormGroup;
  unsubscribe = new Subject();
  @ViewChild('session') modalSession: any;
  email: string;
  message: string;

  constructor(
    private modal: NgbModal,
    private sessionService: SessionService,
    private route: Router,
    private fb: FormBuilder
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
    this.message = null;
    return true;
  }

  createFrom(): void{
    this.formUser = this.fb.group({
      user: ['', Validators.maxLength(5)],
      password: [''],
      restorePw: ['']
    });
    this.readChanges();
  }

  readChanges(): void{
    Object.keys(this.formUser.controls).forEach(key => {
      // console.log(key);
      // this.formUser.get(key).valueChanges.subscribe(value => {
      //   console.log(value);
      // });
    });
  }

  valid(): void{
    // const data = this.formUser.getRawValue();
    const data = this.formUser.getRawValue();
    // tslint:disable-next-line: max-line-length
    if ((data.user === this.sessionService.profile.user || data.user === this.sessionService.profile.email) && (data.password === this.sessionService.profile.password)){
      this.sessionService.session = true;
      this.sessionService.login.next(true);
      window.scroll({top: 0, behavior: 'smooth'});
      this.route.navigate(['/perfil']);
      this.modal.dismissAll();
      this.formUser.setValue({user: '', password: ''});
    } else {
      alert(
        'el usuario de prueba es: ' + this.sessionService.profile.user + ' y la contraseña es: ' + this.sessionService.profile.password
        );
    }
  }

  // inputEmail(event: any): void{
  //   // console.log(event);
  //   this.email = event.target.value;
  // }

  async getRestore(): Promise<void> {
    const data = this.formUser.getRawValue();
    const [error, response] = await to(
      this.sessionService.restorePassword(data.restorePw).toPromise()
    );
    if (response){
      this.message = 'Enviamos un correo electrónico para restablecer la contraseña a';
      this.email = data.restorePw;
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
  }


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
