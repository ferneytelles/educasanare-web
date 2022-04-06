import { Component, OnInit, Input } from '@angular/core';
import { URL_CDN } from '@env/environment';

@Component({
  selector: 'app-section-vr',
  templateUrl: './section-vr.component.html',
  styleUrls: ['./section-vr.component.scss'],
})
export class SectionVrComponent implements OnInit {
  @Input() section: any;
  urlCdn = URL_CDN;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.section);
  }
}
