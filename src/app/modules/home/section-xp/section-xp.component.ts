import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-xp',
  templateUrl: './section-xp.component.html',
  styleUrls: ['./section-xp.component.scss']
})
export class SectionXpComponent implements OnInit {

  xp = [
    {
      img: 'assets/images/xp1.png',
      date: new Date(2021, 7, 23),
      title: 'Loren Impsum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis.'
    },
    {
      img: 'assets/images/xp2.png',
      date: new Date(2021, 8, 9),
      title: 'Quod eum rerum excepturi unde ipsam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate recusandae iste distinctio voluptas hic, sit cumque.'
    },
    {
      img: 'assets/images/xp3.png',
      date: new Date(2021, 8, 19),
      title: 'suscipit ipsa perspiciatis reiciendis',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum rerum excepturi unde ipsam voluptatem, suscipit ipsa perspiciatis reiciendis. reiciendis expedita architecto, assumenda voluptate.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
