import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { URL_CDN } from '@env/environment';

@Component({
  selector: 'app-comic-content',
  templateUrl: './comic-content.component.html',
  styleUrls: ['./comic-content.component.scss']
})
export class ComicContentComponent implements OnInit {

  @Input() page: any;
  @ViewChild('imageZoom') imageHtml: ElementRef;
  imageZoom = '';
  zoom = false;
  spinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  showZoom(img: string): void{
    // this.imageZoom = img;
    this.zoom = true;
    this.spinner = true;
    this.imageHtml.nativeElement.src = URL_CDN + img;
    this.imageHtml.nativeElement.onload = () => {
      this.spinner = false;
    };
    this.imageHtml.nativeElement.onerror = () => {
      this.spinner = false;
    };
  }

}
