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
    arrows: true,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
