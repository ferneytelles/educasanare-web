import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  forums = [
    {
      own: false,
      img: 'assets/images/face1.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      title: 'Titulo del tema 1',
      slug: 'titulo-del-tema-1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: true,
      img: 'assets/images/face3.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      title: 'Titulo del tema 2',
      slug: 'titulo-del-tema-2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: false,
      img: 'assets/images/face2.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      title: 'Titulo del tema 3',
      slug: 'titulo-del-tema-3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: false,
      img: 'assets/images/face1.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      title: 'Titulo del tema 4',
      slug: 'titulo-del-tema-4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(value: string): void{
    const url = this.route.url;
    this.route.navigate([url + '/' + value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

}
