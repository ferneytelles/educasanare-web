import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-item',
  templateUrl: './xp-item.component.html',
  styleUrls: ['./xp-item.component.scss']
})
export class XpItemComponent implements OnInit {

  images = [
    'assets/images/xp1.png',
    'assets/images/xp2.png',
    'assets/images/xp3.png'
  ];

  date = new Date(2021, 8, 15, 18, 24);

  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente suscipit. Officia neque amet corporis similique illo ea voluptatem eos. Animi praesentium quia nulla sunt error ex atque eum, omnis officia itaque ducimus aliquam quo eligendi voluptas exercitationem magni, rem tempore ipsum quidem adipisci dolore consequuntur provident eius facilis. Repudiandae voluptatibus neque quia autem mollitia delectus assumenda quam laboriosam, eligendi, consequuntur quibusdam! Atque numquam, modi, sed ipsa aperiam amet ex velit nam veritatis obcaecati itaque laborum eius tempora molestiae ab, facere reprehenderit culpa fuga odio sequi non facilis corporis labore? In aspernatur ab qui voluptatem quisquam? Deleniti vel nulla maiores.';

  constructor() { }

  ngOnInit(): void {
  }

}
