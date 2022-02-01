import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-edu-content',
  templateUrl: './edu-content.component.html',
  styleUrls: ['./edu-content.component.scss']
})
export class EduContentComponent implements OnInit {

  @Input() section: any;
  pills = [
    {
      img: 'assets/images/cap1.png',
      title: 'Cápsula 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos doloribus in, aspernatur voluptatem dolore. Reiciendis aliquam ut, repellendus, laborum harum beatae, dolor obcaecati fugit facilis necessitatibus optio odio veritatis.'
    },
    {
      img: 'assets/images/cap2.png',
      title: 'Cápsula 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos doloribus in, aspernatur voluptatem dolore. Reiciendis aliquam ut, repellendus, laborum harum beatae, dolor obcaecati fugit facilis necessitatibus optio odio veritatis.'
    },
    {
      img: 'assets/images/cap3.png',
      title: 'Cápsula 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos doloribus in, aspernatur voluptatem dolore. Reiciendis aliquam ut, repellendus, laborum harum beatae, dolor obcaecati fugit facilis necessitatibus optio odio veritatis.'
    },
    {
      img: 'assets/images/cap4.png',
      title: 'Cápsula 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos doloribus in, aspernatur voluptatem dolore. Reiciendis aliquam ut, repellendus, laborum harum beatae, dolor obcaecati fugit facilis necessitatibus optio odio veritatis.'
    },
    {
      img: 'assets/images/cap5.png',
      title: 'Cápsula 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos doloribus in, aspernatur voluptatem dolore. Reiciendis aliquam ut, repellendus, laborum harum beatae, dolor obcaecati fugit facilis necessitatibus optio odio veritatis.'
    }
  ];

  labels: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    // console.log(this.section);
  }

}
