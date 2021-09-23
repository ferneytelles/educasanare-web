import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  options = [
    {text: 'inicio', url: '/inicio'},
    {text: 'interactivo', url: '/interactivo'},
    {text: 'experiencias', url: '/experiencias'},
    {text: 'calendario', url: '/calendario'},
    {text: 'nosotros', url: '/nosotros'},
    {text: 'foros', url: '/foros'},
    {text: 'contacto', url: '/contacto'},
  ];

  active = 0;

  constructor(private route: Router) {
    route.events.subscribe((url: any) => {
      this.options.forEach((obj, index) => {
        if (route.url.includes(obj.url)){
          this.active = index;
        }
      });
    });
   }

  ngOnInit(): void {
  }

  navigate(value: string): void{
    this.route.navigate([value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
