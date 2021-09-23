import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.scss']
})
export class BannerTopComponent implements OnInit {

  @Input() textColor: string;
  @Input() bgColor: string;
  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
