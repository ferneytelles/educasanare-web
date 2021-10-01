import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user = {
    img: '',
    user: '',
    name: '',
    lastname: '',
    email: '',
    password: ''
  };
  @ViewChild('image') image: ElementRef;
  objectURL: any;

  editing = false;

  constructor(
    private sessionService: SessionService,
    private route: Router) {
    this.user = sessionService.profile;
    if (sessionService.file){
      this.objectURL = URL.createObjectURL(sessionService.file);
      this.user.img = this.objectURL;
    }
  }

  ngOnInit(): void {
  }

  changeFile(element: any): void{
    if (element.target.files[0].size > 2097152){
      alert('El archivo supera el tamaño máximo');
    } else {
      this.objectURL = URL.createObjectURL(element.target.files[0]);
      this.user.img = this.objectURL;
      console.log(this.image.nativeElement.src);
      this.sessionService.file = element.target.files[0];
    }
  }

  offSession(): void{
    this.sessionService.session = false;
    window.scroll({top: 0, behavior: 'smooth'});
    this.route.navigate(['/proyecto']);
  }
}
