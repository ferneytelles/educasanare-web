import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Input,
  ElementRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { PageService } from '@shared/services/page.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss'],
})
export class ModalVideoComponent implements OnInit, OnDestroy {
  //
  @Input() urlVideo: string;
  unsubscribe = new Subject();
  @ViewChild('modalVideo') container: any;
  @ViewChild('video') video: ElementRef;
  spinner = false;

  constructor(private page: PageService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.page.modalVideo.pipe(takeUntil(this.unsubscribe)).subscribe((data) => {
      this.urlVideo = data;
      this.openModal();
      this.spinner = true;
      setTimeout(() => {
        this.spinner = false;
      }, 3000);
    });
  }

  openModal(): void {
    this.modal.open(this.container, {
      windowClass: 'videoModal',
      centered: true,
    });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
