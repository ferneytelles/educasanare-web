import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.scss']
})
export class MainAboutComponent implements OnInit {

  text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo molestiae saepe odit deleniti. Fugit delectus totam, recusandae officiis soluta possimus voluptatum dignissimos obcaecati exercitationem ipsa dolor corporis cupiditate sed! Animi.';

  objectives = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
