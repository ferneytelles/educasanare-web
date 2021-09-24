import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.scss']
})
export class MainProjectComponent implements OnInit {

  textBanner = 'Fortalecimiento de capacidades de CTEI para la innovación educativa en educación básica y media, mediante uso de tics en instituciones oficiales del Departamento de Casanare Código BPIN: 2020000100637';

  constructor() { }

  ngOnInit(): void {
  }

}
