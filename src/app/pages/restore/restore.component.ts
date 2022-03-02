import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@shared/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '@shared/services/session.service';
import to from 'await-to-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

  token: string;
  // formUser: FormGroup;
  formPassword: FormGroup;

  constructor(
    private form: FormBuilder,
    private actived: ActivatedRoute,
    private session: SessionService,
    private authentication: AuthenticationService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.token = this.actived.snapshot.params.token;
    this.verifyToken();
    this.createFrom();
  }

  async verifyToken(): Promise<void> {
    // console.log('sdsfghjdsfsghjgffdgh');
    const [err, confirm]: Array<any> = await to(
      this.session.confirmPassword('a', this.token).toPromise()
    );
    if (err) {
      if (err.error.status === 403){
        await this.authentication.getToken();
        this.verifyToken();
        return;
      }
      if (err.error.status === 'notfound') {
        this.route.navigate(['/inicio']);
      }
    }
  }

  createFrom(): void{
    this.formPassword = this.form.group({
      password: ['', Validators.minLength(8)],
      pwConfirm: ['']
    });
    this.readChanges();
  }

  readChanges(): void{
    Object.keys(this.formPassword.controls).forEach(key => {
      // console.log(key);
      // this.formPassword.get(key).valueChanges.subscribe(value => {
      //   console.log(value);
      // });
    });
  }

  async sendPassword(): Promise<void>{
    let message = '';
    const data = this.formPassword.getRawValue();
    // console.log(data.password);
    const [err, confirm]: any = await to(
      this.session.confirmPassword(data.password, this.token).toPromise()
    );
    if (err){
      if (err.error.status === 403){
        await this.authentication.getToken();
        this.sendPassword();
        return;
      }
    }
    if (confirm) {
      // console.log(confirm);
      Swal.fire({
        icon: 'success',
        text: 'Contraseña actualizada'
      }).then((willDelete) => {
        if (willDelete) {
          // console.log('Cerró la alerta');
          this.route.navigate(['/inicio']);
        }
      });
    } else {
      // console.log(err);
      if (err.error.password){
        // @ts-ignore
        err.error.password.forEach((x) => {
          message += `<li style="list-style: none;">${x}</li>`;
        });
      } else {
        message = `<li style="list-style: none;">No autorizado para esta acción</li>`;
      }
      Swal.fire({
        icon: 'error',
        html: `<ul style="padding: 0">${message}</ul>`,
        confirmButtonColor: '#0072BC'
      }).then((willDelete) => {
        if (willDelete) {
          // console.log('Cerró la alerta');
          this.formPassword.reset();
        }
      });
    }
  }

}
