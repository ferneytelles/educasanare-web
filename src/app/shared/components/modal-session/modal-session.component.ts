import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-session',
  templateUrl: './modal-session.component.html',
  styleUrls: ['./modal-session.component.scss']
})
export class ModalSessionComponent implements OnInit, OnDestroy {

  formUser: FormGroup;
  unsubscribe = new Subject();
  @ViewChild('session') modalSession: any;

  constructor(
    private modal: NgbModal,
    private sessionService: SessionService,
    private route: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sessionService.modalSession.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.openModal();
    });
    this.createFrom();
  }

  openModal(): void{
    this.modal.open(this.modalSession, {windowClass: 'modal-session', centered: true});
  }

  createFrom(): void{
    this.formUser = this.fb.group({
      user: ['', Validators.maxLength(5)],
      password: ['']
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


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
