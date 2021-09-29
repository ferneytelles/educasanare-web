import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.scss']
})
export class ForumItemComponent implements OnInit {

  forum = {
    own: false,
    img: 'assets/images/face3.jpg',
    user: 'afsdfd_35',
    date: '21/05/2021 15:45',
    title: 'Titulo del tema 2',
    slug: 'titulo-del-tema-2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
  };

  answers = [
    {
      own: false,
      img: 'assets/images/face1.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: true,
      img: 'assets/images/face3.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    },
    {
      own: false,
      img: 'assets/images/face2.jpg',
      user: 'afsdfd_35',
      date: '21/05/2021 15:45',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque minus enim nobis ad, cupiditate, dolorem velit quis modi explicabo fugiat magnam odio, quod officia voluptas ducimus. Recusandae, asperiores labore. cupiditate, dolorem velit quis modi explicabo fugiat magnam odio.'
    }
  ];

  height = 60;
  @ViewChild('textArea') text: ElementRef;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.forum.own = this.route.url.includes('2');
  }

  setHeight(): void{
    if (this.text.nativeElement.scrollHeight > this.height){
      this.height = this.text.nativeElement.scrollHeight + 2;
    }
    // console.log(this.text.nativeElement.scrollHeight);
    // console.log(this.text.nativeElement.getBoundingClientRect().height);
    // console.log(this.text);
  }

  cancelText(): void{
    this.text.nativeElement.value = '';
    this.height = 60;
  }

}
