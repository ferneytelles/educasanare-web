import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides = [
    {
      img: 'assets/images/slide1.png',
      title: 'Loren Ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti maiores harum ducimus et sed dolore, exercitationem tempora neque sapiente? Sint beatae quo rerum vitae consequatur fugit veritatis commodi quibusdam.'
    },
    {
      img: 'assets/images/slide2.png',
      title: 'Loren Ipsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti maiores harum ducimus et sed dolore, exercitationem tempora neque sapiente? Sint beatae quo rerum vitae consequatur fugit veritatis commodi quibusdam.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
