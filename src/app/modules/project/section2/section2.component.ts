import { Component, Input, OnInit } from '@angular/core';
import { URL_MEDIA } from '@env/environment';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  @Input() section: any;
  background: string;
  items = [
    {
      img: 'assets/images/icon5.png',
      number: '30',
      text: 'Laboratorios para STEAM, tres para cada una de las diez I.E.O beneficiadas.'
    },
    {
      img: 'assets/images/icon6.png',
      number: '30',
      text: 'Kits de terminales de acceso treinta (30) tabletas y gabinete porta tabletas para cada I.E.O.'
    },
    {
      img: 'assets/images/icon7.png',
      number: '11',
      text: 'Kits de visualización e inmersión de realidad virtual. Diez para I.E.O beneficiadas y uno para la Secretaria de Educación Departamental de Casanare.'
    },
    {
      img: 'assets/images/icon8.png',
      number: '',
      text: 'Suministro e implementación de un laboratorio Audiovisual. (LLANO ARTE LAB).'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.section.background_image !== null){
      this.background =  `url(${URL_MEDIA}${this.section?.background_image})`;
    } else {
      this.background = 'url(../../../../assets/images/bgglasses.png)';
    }
  }

}
