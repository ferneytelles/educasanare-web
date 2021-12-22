import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@shared/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

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
    private authentication: AuthenticationService,
    private actived: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.token = this.actived.snapshot.params.token;
    this.createFrom();
    this.authentication.getToken();
    console.log(this.token);
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
      this.formPassword.get(key).valueChanges.subscribe(value => {
        console.log(value);
      });
    });
  }

  async sendPassword(): Promise<void>{
    console.log(this.formPassword.get('passwaord'));
  }

}
