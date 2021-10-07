import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics = [
    {
      image: 'assets/comics/EC1/Viñetas/1.jpg',
      title: 'El caiman toom',
      description: 'Cuenta la historia del caiman toom, un viejo y gigantesco ejemplar que protege día y noche a sus huevecillos de las terribles garras humanas, para que puedan conocer la maravillosa vida que les ofrece el afluente del orinoco.',
      content: [
        {
          type: 0,
          images: ['assets/comics/EC1/Viñetas/1.jpg']
        },
        {
          type: 1,
          images: [
            'assets/comics/EC1/Viñetas/2.jpg',
            'assets/comics/EC1/Viñetas/3.jpg',
            'assets/comics/EC1/Viñetas/4.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC1/Viñetas/5.jpg',
            'assets/comics/EC1/Viñetas/6.jpg',
            'assets/comics/EC1/Viñetas/7.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC1/Viñetas/8.jpg',
            'assets/comics/EC1/Viñetas/9.jpg',
            'assets/comics/EC1/Viñetas/10.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC1/Viñetas/11.jpg',
            'assets/comics/EC1/Viñetas/12.jpg',
            'assets/comics/EC1/Viñetas/13.jpg'
          ]
        }
      ]
    },
    {
      image: 'assets/comics/EC2/Viñetas/1.jpg',
      title: 'Mama capibara y la sequia del llano',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex beatae debitis quo exercitationem totam! Vero iste excepturi',
      content: [
        {
          type: 0,
          images: ['assets/comics/EC2/Viñetas/1.jpg']
        },
        {
          type: 1,
          images: [
            'assets/comics/EC2/Viñetas/2.jpg',
            'assets/comics/EC2/Viñetas/3.jpg',
            'assets/comics/EC2/Viñetas/4.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC2/Viñetas/5.jpg',
            'assets/comics/EC2/Viñetas/6.jpg',
            'assets/comics/EC2/Viñetas/7.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC2/Viñetas/8.jpg',
            'assets/comics/EC2/Viñetas/9.jpg',
            'assets/comics/EC2/Viñetas/10.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC2/Viñetas/11.jpg',
            'assets/comics/EC2/Viñetas/12.jpg',
            'assets/comics/EC2/Viñetas/13.jpg'
          ]
        }
      ]
    }
  ];

  modalComic: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
