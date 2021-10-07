import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComicsService } from '../../../shared/services/comics.service';

@Component({
  selector: 'app-modal-comic',
  templateUrl: './modal-comic.component.html',
  styleUrls: ['./modal-comic.component.scss']
})
export class ModalComicComponent implements OnInit, OnDestroy {

  options = [
    {
      iconName: 'home',
      text: 'inicio'
    },
    {
      iconName: 'file_copy',
      text: 'metadatos'
    },
    {
      iconName: 'menu_book',
      text: 'manual'
    },
    {
      iconName: 'info',
      text: 'créditos'
    }
  ];
  page = 0;
  progress = 0;
  @Input() content: Array<any>;
  unsubscribe = new Subject();
  @ViewChild('comic') modalComic: any;

  constructor(
    private modal: NgbModal,
    private comicService: ComicsService) { }

  ngOnInit(): void {
    this.comicService.modalComic.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.openModal();
    });
    this.setProgress();
  }

  openModal(): void{
    this.modal.open(this.modalComic, {windowClass: 'modal-comic', centered: true});
  }

  movePage(value: boolean): void{
    if (value) {
      if (this.page < this.content.length - 1){
        this.page += 1;
        this.setProgress();
      }
    } else{
      if (this.page > 0){
        this.page -= 1;
        this.setProgress();
      }
    }
  }

  setProgress(): void{
    this.progress = ((this.page + 1) / this.content.length) * 100;
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
