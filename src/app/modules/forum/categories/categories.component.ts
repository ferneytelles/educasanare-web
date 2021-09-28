import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      img: 'assets/images/inst5.png',
      title: 'robotica',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    },
    {
      img: 'assets/images/inst5.png',
      title: 'laboratorio de física',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde cumque assumenda voluptatum, eos, iste aliquam reprehenderit',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
