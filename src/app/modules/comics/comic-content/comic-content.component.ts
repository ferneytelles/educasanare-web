import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-content',
  templateUrl: './comic-content.component.html',
  styleUrls: ['./comic-content.component.scss']
})
export class ComicContentComponent implements OnInit {

  @Input() page: any;

  constructor() { }

  ngOnInit(): void {
  }

}
