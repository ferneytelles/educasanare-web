import { Component, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-section-forum',
  templateUrl: './section-forum.component.html',
  styleUrls: ['./section-forum.component.scss']
})
export class SectionForumComponent implements OnInit {

  forums = [
    {
      img: 'assets/images/face1.jpg',
      user: 'Prof_01',
      date: new Date(2021,9,11,10,15),
      category: 'robotica',
      title: 'Titulo del tema del foro',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas accusamus dolorem, quam numquam minima. Necessitatibus id doloremque, commodi voluptates at sint cumque praesentium molestias. Exercitationem illo reiciendis neque dicta.'
    },
    {
      img: 'assets/images/face2.jpg',
      user: 'profile2345',
      date: new Date(2021, 8, 15, 18, 24),
      category: 'producción audiovisual',
      title: 'Titulo del tema del foro',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas accusamus dolorem, quam numquam minima. Necessitatibus id doloremque, commodi voluptates at sint cumque praesentium molestias. Exercitationem illo reiciendis neque dicta.'
    }
  ];

  labels: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
  }

}
