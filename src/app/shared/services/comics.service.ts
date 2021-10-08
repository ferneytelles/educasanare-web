import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  comics = [
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC1/port.png',
      title: 'El caiman toom',
      description: 'Cuenta la historia del caiman toom, un viejo y gigantesco ejemplar que protege día y noche a sus huevecillos de las terribles garras humanas, para que puedan conocer la maravillosa vida que les ofrece el afluente del orinoco.',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC1/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC1/1.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC1/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/3.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/4.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC1/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/6.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/7.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC1/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/9.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/10.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC1/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/12.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/13.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC1/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/15.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC1/16.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC2/port.png',
      title: 'Mama capibara y la sequia del llano',
      description: 'Lorem ipsum dolor sit amet consectetur',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC2/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC2/1.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC2/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/3.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/4.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC2/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/6.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/7.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC2/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/9.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/10.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC2/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/12.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/13.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC2/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/15.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC2/16.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC3/port.png',
      title: 'Lola, el drama de una madre',
      description: 'Lola, la nutria y sus hijos se ven amenazados cuando llega un grupo de traficantes de animales a la orilla del rio, quienes al darse cuenta de la presencia de las nutrias ven posibilidad de venderlas para ganar dinero.',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC3/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC3/1.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC3/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/3.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/4.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC3/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/6.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/7.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC3/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/9.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/10.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC3/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/12.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/13.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC3/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/15.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC3/16.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC4/port.png',
      title: 'El osito hormiguero super heroe',
      description: '"Samy" es un oso hormiguero muy extrovertido...',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC4/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC4/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC4/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC4/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC4/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC4/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC4/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC4/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC5/port.png',
      title: '¿Qué somos mamá?',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC5/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC5/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC5/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC5/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC5/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC5/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC5/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC5/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC6/port.png',
      title: 'Olimpiadas del bosque',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC6/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC6/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC6/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC6/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC6/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC6/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC6/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC6/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC7/port.png',
      title: 'Ramas del oficio',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC7/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC7/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC7/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC7/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/6.jpg',
          ]
        },
        {
          type: 4,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC7/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC7/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC7/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC7/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC8/port.png',
      title: 'Manchas del hombre',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC8/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC8/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC8/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC8/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC8/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC8/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC8/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC8/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC9/port.png',
      title: 'Palmaritolandia',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC9/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC9/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC9/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC9/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC9/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC9/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC9/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC9/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC10/port.png',
      title: 'Pedro la chaparrita',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC10/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC10/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC10/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC10/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC10/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC10/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC10/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC10/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC11/port.png',
      title: 'Sin caza como en casa',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC11/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC11/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC11/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC11/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC11/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC11/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC11/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC11/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC12/port.png',
      title: 'Con la vida a cuestas',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC12/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC12/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC12/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC12/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC12/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC12/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC12/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC12/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC13/port.png',
      title: 'Ruga lenta, rapida conclusión',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC13/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC13/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC13/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC13/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC13/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC13/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC13/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC13/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC14/port.png',
      title: 'Protección perjudicial',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC14/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC14/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC14/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC14/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC14/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC14/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/12.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC14/130.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC14/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC15/port.png',
      title: 'La abuela gansa del orinoco',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC15/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC15/00.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC15/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC15/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC15/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/9.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC15/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC15/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC15/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC16/port.png',
      title: 'Libre de volada',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC16/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC16/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC16/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC16/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC16/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC16/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/12.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC16/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC16/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC17/port.png',
      title: 'De lo que hablamos los loros',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC17/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC17/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC17/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/3.jpg'
          ]
        },
        {
          type: 4,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC17/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC17/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC17/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC17/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC17/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC18/port.png',
      title: 'En piel ajena',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC18/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC18/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC18/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC18/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/6.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC18/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC18/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC18/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC18/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC19/port.png',
      title: 'Profe pepperan anaconda',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC19/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC19/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC19/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC19/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/6.jpg',
          ]
        },
        {
          type: 4,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC19/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC19/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC19/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC19/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC20/port.png',
      title: 'Camino de rosas aves gloriosas',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC20/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC20/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC20/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC20/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC20/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC20/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC20/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC20/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC21/port.png',
      title: 'Ladrón robado, y su mundo acabado',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC21/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC21/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC21/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC21/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC21/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/9.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC21/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC21/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC21/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC22/port.png',
      title: 'Hasta que se acaba',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC22/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC22/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC22/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC22/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC22/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC22/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC22/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC22/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC23/port.png',
      title: 'Festejo al rojo vivo',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC23/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC23/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC23/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC23/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/6.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC23/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC23/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/12.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC23/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC23/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC24/port.png',
      title: 'Antes y despues, aquí habia un pez',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC24/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC24/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC24/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC24/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC24/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC24/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC24/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC24/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC25/port.png',
      title: 'Prj mavera saludable',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC25/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC25/0.jpg']
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC25/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC25/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/6.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC25/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/9.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC25/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC25/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC25/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC26/port.png',
      title: 'Fruto de la explotación',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC26/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC26/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC26/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/3.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC26/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/6.jpg',
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC26/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC26/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/12.jpg'
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC26/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC26/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC27/port.png',
      title: 'Naranjas al aire',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC27/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC27/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC27/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC27/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC27/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC27/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC27/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC27/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC28/port.png',
      title: 'Madera en ocaso',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC28/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC28/0.jpg']
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC28/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/3.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC28/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC28/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/9.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC28/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC28/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC28/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC29/port.png',
      title: 'Sube como palma... y ahí se queda',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC29/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC29/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC29/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC29/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/6.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC29/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/9.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC29/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/12.jpg'
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC29/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC29/15.jpg'
          ]
        }
      ]
    },
    {
      miniature: 'https://educasanare.gumlet.io/pruebas/comics/EC30/port.png',
      title: '¿Astucia? pura paja',
      description: 'Ante la pregunta inquietante de sus hijos, la chucha lanuda responde y argumenta sobre la identidad de su especie y la importancia que son para el ecosistema',
      audio: 'https://cms-cato.s3.amazonaws.com/media/pruebas/comics/EC30/000.mp3',
      content: [
        {
          type: 0,
          images: ['https://educasanare.gumlet.io/pruebas/comics/EC30/0.jpg']
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC30/1.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/2.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/3.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC30/4.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/5.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/6.jpg',
          ]
        },
        {
          type: 1,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC30/7.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/8.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/9.jpg',
          ]
        },
        {
          type: 3,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC30/10.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/11.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/12.jpg'
          ]
        },
        {
          type: 2,
          images: [
            'https://educasanare.gumlet.io/pruebas/comics/EC30/13.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/14.jpg',
            'https://educasanare.gumlet.io/pruebas/comics/EC30/15.jpg'
          ]
        }
      ]
    },
  ];

  modalComic: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
