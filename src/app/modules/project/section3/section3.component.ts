import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  web = {
    img: 'assets/images/icon9.png',
    number: '',
    text: 'Diseño e implementación de una Plataforma Educativa "educasanare.casanare.gov.co"'
  };

  items = [
    {
      img: 'assets/images/icon10.png',
      number: '10',
      text: 'Sistemas web para la getión de aprendizaje, uno por cada I.E.O. Licencimiento e implementación.'
    },
    {
      img: '',
      number: '',
      text: 'Licenciamiento e implementación de software de simulación de Pruebas Saber y evaluación de competencias para los grados 3°, 5°, 9° y 11°'
    },
    {
      img: 'assets/images/icon11.png',
      number: '30',
      text: 'Licencias vitalicias una por cada I.E.O.'
    },
    {
      img: 'assets/images/icon12.png',
      number: '',
      text: 'Diseño e desarrollo de una aplicación móvil Android y IOS con componentes de realidad virtual para el autoaprendizaje interactivo de temáticas Naranja.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
