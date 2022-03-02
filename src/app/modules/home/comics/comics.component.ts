import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { ComicsService } from 'src/app/shared/services/comics.service';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  @Input() section: any;
  comics2: Array<any>;
  comics = [
    {
      color: '#92B65B',
      img: 'assets/images/comic1.png',
      title: 'Comic 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia, ullam id accusamus aliquid sunt ex illum eius. Repellat natus repudiandae laborum aliquam inventore optio.'
    },
    {
      color: '#3BB2DD',
      img: 'assets/images/comic2.png',
      title: 'Comic 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia, ullam id accusamus aliquid sunt ex illum eius. Repellat natus repudiandae laborum aliquam inventore optio.'
    },
    {
      color: '#FF7FAA',
      img: 'assets/images/comic3.png',
      title: 'Comic 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia, ullam id accusamus aliquid sunt ex illum eius. Repellat natus repudiandae laborum aliquam inventore optio.'
    },
    {
      color: '#8781BD',
      img: 'assets/images/comic4.png',
      title: 'Comic 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia, ullam id accusamus aliquid sunt ex illum eius. Repellat natus repudiandae laborum aliquam inventore optio.'
    }
  ];

  selectComic = 0;

  labels: any;

  constructor(
    private route: Router,
    private comicService: ComicsService,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    // this.comics2 = this.comicService.comics.slice(0, 4);
    // console.log(this.section);
    this.comics2 = this.section?.posts.slice(0, 4);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
  }

  goComics(): void{
    window.scroll({top: 0, behavior: 'smooth'});
    this.route.navigate(['/comics']);
  }

  openComic(index: number): void{
    this.selectComic = index;
    this.comicService.modalComic.next(true);
  }
}
