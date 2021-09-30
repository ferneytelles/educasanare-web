import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      img: 'assets/images/category1.png',
      title: 'robótica',
      slug: 'robotica',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    },
    {
      img: 'assets/images/category2.png',
      title: 'laboratorio de física',
      slug: 'laboratorio-de-fisica',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    },
    {
      img: 'assets/images/category3.png',
      title: 'biología',
      slug: 'biologia',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    },
    {
      img: 'assets/images/category4.png',
      title: 'producción audiovisual',
      slug: 'produccion-audiovisual',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    },
  ];

  faces = [
    'assets/images/face1.jpg',
    'assets/images/face3.jpg',
    'assets/images/face2.jpg'
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(value: string): void{
    this.route.navigate(['/foros/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
