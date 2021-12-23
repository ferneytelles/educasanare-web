import { asNativeElements, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() section: any;
  slides = [];
  // slides = [
  //   {
  //     img: 'assets/images/slide1.png',
  //     title: 'Loren Ipsum',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti maiores harum ducimus et sed dolore, exercitationem tempora neque sapiente? Sint beatae quo rerum vitae consequatur fugit veritatis commodi quibusdam.'
  //   },
  //   {
  //     img: 'assets/images/slide2.png',
  //     title: 'Loren Ipsum 2',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti maiores harum ducimus et sed dolore.'
  //   }
  // ];
  currentSilde = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log('inició el carrusel', this.slides);
    this.slides = this.section?.posts;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   // Add '${implements OnChanges}' to the class.
  //   if (changes.section && this.section){
  //     // console.log(this.section);
  //     this.slides = this.section?.posts;
  //   }
  // }

  changeCarousel(value: any): void{
    this.currentSilde = parseInt(value.current, 10);
    // console.log(this.currentSilde);
  }

}
