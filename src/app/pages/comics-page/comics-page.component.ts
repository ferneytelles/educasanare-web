import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent implements OnInit {

  @Input() content: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'inicio').sections.find(ob => ob.slug === 'e-comics');
    // console.log(this.content);
  }

}
