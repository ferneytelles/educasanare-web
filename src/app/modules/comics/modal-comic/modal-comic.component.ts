import { Component, OnInit, ViewChild, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComicsService } from '../../../shared/services/comics.service';
import { URL_MEDIA } from '@env/environment';

@Component({
  selector: 'app-modal-comic',
  templateUrl: './modal-comic.component.html',
  styleUrls: ['./modal-comic.component.scss']
})
export class ModalComicComponent implements OnInit, OnDestroy {

  @Input() metadata: string;
  @Input() manual: string;
  @Input() credits: string;
  options: Array<any>;
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
    console.log('se asignaron los pdfs');
    this.options = [
      {
        iconName: 'home',
        text: 'inicio',
        action: this.moveInit,
        value: 0
      },
      {
        iconName: 'file_copy',
        text: 'metadatos',
        action: this.openFile,
        value: this.metadata
      },
      {
        iconName: 'menu_book',
        text: 'manual',
        action: this.openFile,
        value: this.manual
      },
      {
        iconName: 'info',
        text: 'créditos',
        action: this.openFile,
        value: this.credits
      }
    ];
    console.log(this.content);
    this.comicService.modalComic.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.openModal();
    });
    this.setProgress();
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    this.setTextButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (!!this.options && changes.metadata){
      this.options[1].value = this.metadata;
      this.options[2].value = this.manual;
      this.options[3].value = this.credits;
    }
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

  action(event: any, value: any): void{
    event(value);
  }

  moveInit = (value: number) => {
    this.page = value;
    this.setProgress();
  }

  openFile = (value: string) => {
    window.open(URL_MEDIA + value, '_blank');
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
