import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  options = [
    {text: 'proyecto', url: '/proyecto'},
    {text: 'interactivo', url: '/interactivo'},
    {text: 'experiencias', url: '/experiencias'},
    {text: 'calendario', url: '/calendario'},
    {text: 'nosotros', url: '/nosotros'},
    {text: 'foros', url: '/foros'},
    {text: 'contacto', url: '/contacto'},
  ];

  active = -1;

  constructor(private route: Router, private session: SessionService) {
    route.events.subscribe((url: any) => {
      let changeUrl = false;
      this.options.forEach((obj, index) => {
        if (route.url.includes(obj.url)){
          this.active = index;
          changeUrl = true;
        }
      });
      if (!changeUrl){
        this.active = -1;
      }
    });
   }

  ngOnInit(): void {
  }

  navigate(value: string): void{
    this.route.navigate([value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

  goProfile(): void{
    if (this.session.session){
      this.route.navigate(['/perfil']);
    } else {
      this.session.modalSession.next(true);
    }
  }

}
