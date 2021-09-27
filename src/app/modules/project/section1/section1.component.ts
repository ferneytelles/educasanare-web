import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  items = [
    {
      img: 'assets/images/icon1.png',
      number: '10',
      text: 'I.E.O en los ocho municipios focalizados. Suministro y tendido de fibra e instalación de radio enlaces para la conectividad.'
    },
    {
      img: 'assets/images/icon2.png',
      number: '30',
      text: 'Zonas wiffi de largo alcance. Diseño, instalación, configuración y puesta en marcha.'
    },
    {
      img: 'assets/images/icon3.png',
      number: '30',
      text: 'Megas, 12 meses, IP pública. Suministro de canal de acceso a internet en cada una de las sedes educativas beneficiadas.'
    },
    {
      img: 'assets/images/icon4.png',
      number: '',
      text: 'Suministro, configuración, instalación e implementación de servidor de respaldo para recuperación ante desastres informáticos.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
