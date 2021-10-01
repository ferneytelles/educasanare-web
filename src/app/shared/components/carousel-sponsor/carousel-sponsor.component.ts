import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-sponsor',
  templateUrl: './carousel-sponsor.component.html',
  styleUrls: ['./carousel-sponsor.component.scss']
})
export class CarouselSponsorComponent implements OnInit {

  slides = [
    'assets/images/minc.png',
    'assets/images/sgr.png',
    'assets/images/gob.png',
    'assets/images/SEC.png',
    'assets/images/tecnalia.png',
    'assets/images/cato.png',
    'assets/images/smart.png',
  ];

  slideConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
