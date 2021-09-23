import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xp-main',
  templateUrl: './xp-main.component.html',
  styleUrls: ['./xp-main.component.scss']
})
export class XpMainComponent implements OnInit {

  xp = [
    {
      slug: 'xp-1', 
      img: 'assets/images/xp1.png',
      date: new Date(2021, 7, 23),
      title: 'Loren Impsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis.'
    },
    {
      slug: 'xp-2',
      img: 'assets/images/xp2.png',
      date: new Date(2021, 8, 9),
      title: 'Quod eum rerum excepturi unde ipsam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate recusandae iste distinctio voluptas hic, sit cumque.'
    },
    {
      slug: 'xp-3',
      img: 'assets/images/xp3.png',
      date: new Date(2021, 8, 19),
      title: 'suscipit ipsa perspiciatis reiciendis',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate.'
    },
    {
      slug: 'xp-4',
      img: 'assets/images/xp1.png',
      date: new Date(2021, 7, 23),
      title: 'Loren Impsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis.'
    },
    {
      slug: 'xp-5',
      img: 'assets/images/xp2.png',
      date: new Date(2021, 8, 9),
      title: 'Quod eum rerum excepturi unde ipsam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate recusandae iste distinctio voluptas hic, sit cumque.'
    },
    {
      slug: 'xp-6',
      img: 'assets/images/xp3.png',
      date: new Date(2021, 8, 19),
      title: 'suscipit ipsa perspiciatis reiciendis',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate.'
    }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(value: string): void{
    window.scroll({top: 0, behavior: 'smooth'});
    this.route.navigate([value]);
  }

}
