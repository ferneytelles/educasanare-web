import { Component, Input, OnInit } from '@angular/core';
import { ComicsService } from '../../../shared/services/comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {

  @Input() content: any;
  comics: Array<any>;
  selectComic = 0;

  constructor(private comicService: ComicsService) {
    // this.comics = comicService.comics;
  }

  ngOnInit(): void {
    // console.log(this.content);
    this.comics = this.content?.posts;
  }
  openComic(index: number): void{
    this.selectComic = index;
    this.comicService.modalComic.next(true);
  }

}
