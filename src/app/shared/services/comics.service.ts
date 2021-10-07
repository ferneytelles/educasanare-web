import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics = [
    {
      miniature: 'assets/comics/EC1/001.png',
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
        },
        {
          type: 1,
          images: [
            'assets/comics/EC1/Viñetas/14.jpg',
            'assets/comics/EC1/Viñetas/15.jpg',
            'assets/comics/EC1/Viñetas/16.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'assets/comics/EC2/002.png',
      title: 'Mama capibara y la sequia del llano',
      description: 'Lorem ipsum dolor sit amet consectetur',
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
        },
        {
          type: 1,
          images: [
            'assets/comics/EC2/Viñetas/14.jpg',
            'assets/comics/EC2/Viñetas/15.jpg',
            'assets/comics/EC2/Viñetas/16.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'assets/comics/EC3/003.png',
      title: 'Lola, el drama de una madre',
      description: 'Lola, la nutria y sus hijos se ven amenazados cuando llega un grupo de traficantes de animales a la orilla del rio, quienes al darse cuenta de la presencia de las nutrias ven posibilidad de venderlas para ganar dinero.',
      content: [
        {
          type: 0,
          images: ['assets/comics/EC3/Viñetas/1.jpg']
        },
        {
          type: 2,
          images: [
            'assets/comics/EC3/Viñetas/2.jpg',
            'assets/comics/EC3/Viñetas/3.jpg',
            'assets/comics/EC3/Viñetas/4.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'assets/comics/EC3/Viñetas/5.jpg',
            'assets/comics/EC3/Viñetas/6.jpg',
            'assets/comics/EC3/Viñetas/7.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'assets/comics/EC3/Viñetas/8.jpg',
            'assets/comics/EC3/Viñetas/9.jpg',
            'assets/comics/EC3/Viñetas/10.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'assets/comics/EC3/Viñetas/11.jpg',
            'assets/comics/EC3/Viñetas/12.jpg',
            'assets/comics/EC3/Viñetas/13.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'assets/comics/EC3/Viñetas/14.jpg',
            'assets/comics/EC3/Viñetas/15.jpg',
            'assets/comics/EC3/Viñetas/16.jpg'
          ]
        }
      ]
    }
  ];

  modalComic: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
