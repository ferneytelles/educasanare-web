import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lastScroll = 0;
  showHeader = true;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll === 0) {
        this.showHeader = true;
      }
      if (currentScroll > this.lastScroll && currentScroll > 500){
        this.showHeader = false;
      }
      if (currentScroll < this.lastScroll){
        this.showHeader = true;
      }
      this.lastScroll = currentScroll;
    });
  }

}
