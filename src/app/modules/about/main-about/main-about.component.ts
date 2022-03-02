import { Component, OnInit, Input } from '@angular/core';
import { URL_CDN } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.scss']
})
export class MainAboutComponent implements OnInit {

  @Input() content: any;

  text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo molestiae saepe odit deleniti. Fugit delectus totam, recusandae officiis soluta possimus voluptatum dignissimos obcaecati exercitationem ipsa dolor corporis cupiditate sed! Animi.';

  objetives = [
    {
      title: 'Objetivo específico 1 (OE1)',
      text: 'Ambiente de aprendizaje con meditación tic y enfoque STEM + a para el fomento de la innovación educativa.'
    },
    {
      title: 'Objetivo específico 2 (OE2)',
      text: 'Formar docentes, estudiantes y padres de familia en competencias, habilidades y destrezas digitales y de gestión virtual de aprendizaje.'
    },
    {
      title: 'Objetivo específico 3 (OE3)',
      text: 'Mejorar nivel de integración de tic y de competencias STEM en los proyectos educativos institucionales-PEI y currículos de las I.E.O.'
    }
  ];

  inst = [
    {
      img: 'assets/images/inst1.png',
      name: 'I.E. Camilo Torre Restrepo',
      town: 'Aguazul'
    },
    {
      img: 'assets/images/inst2.png',
      name: 'I.E. San Agustín',
      town: 'Aguazul'
    },
    {
      img: 'assets/images/inst3.png',
      name: 'I.E. Nuestra Señora de los Dolores Manare',
      town: 'Villanueva'
    },
    {
      img: 'assets/images/inst4.png',
      name: 'I.E. Ezequiel Moreno Díaz',
      town: 'Villanueva'
    },
    {
      img: 'assets/images/inst5.png',
      name: 'I.E. Escuela Normal Superior',
      town: 'Monterrey'
    },
    {
      img: 'assets/images/inst6.png',
      name: 'I.E. Jesús Bernal Pinzón',
      town: 'Maní'
    },
    {
      img: 'assets/images/inst7.png',
      name: 'I.E. Refael Uribe Uribe',
      town: 'Pore'
    },
    {
      img: 'assets/images/inst8.png',
      name: 'I.E. Juan José Rondón',
      town: 'Paz de Ariporo'
    },
    {
      img: 'assets/images/inst9.png',
      name: 'I.T.E. Francisco Lucea',
      town: 'San Luis de Palenque'
    },
    {
      img: 'assets/images/inst10.png',
      name: 'I.E. José María Córdoba',
      town: 'Tauramena'
    }
  ];

  banner: any;
  objectives: any;
  dataInterest: Array<any>;
  institutions: any;
  urlCdn: string;

  constructor() { }

  ngOnInit(): void {
    this.urlCdn = URL_CDN;
    // console.log(this.content);
    this.banner = this.content.sections[0]?.posts;
    this.objectives = this.content?.sections[1];
    this.dataInterest = this.content.sections[2]?.posts;
    this.institutions = this.content?.sections[3];
  }

}
