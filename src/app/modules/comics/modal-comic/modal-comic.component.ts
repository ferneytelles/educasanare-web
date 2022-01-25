import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
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
  @Input() audio: string;
  unsubscribe = new Subject();
  @ViewChild('comic') modalComic: any;
  labels: any;

  constructor(
    private modal: NgbModal,
    private comicService: ComicsService,
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.comicService.modalComic.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.openModal();
    });
    this.setProgress();
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.setTextButtons();
  }

  setTextButtons(): void{
    this.options[0].text = this.labels.btn_start;
    this.options[1].text = this.labels.btn_metadata;
    this.options[2].text = this.labels.btn_manual;
    this.options[3].text = this.labels.btn_credits;
  }

  openModal(): void{
    this.modal.open(this.modalComic, {windowClass: 'modal-comic', centered: true, beforeDismiss: (): boolean => {
      this.page = 0;
      this.setProgress();
      return true;
    }});
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
