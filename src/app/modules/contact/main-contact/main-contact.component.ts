import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {

  content: any;
  information: string;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'contacto');
    this.information = this.content.sections[0].posts[0]?.description;
    // console.log(this.information);
  }

}
