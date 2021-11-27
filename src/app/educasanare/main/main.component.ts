import { Component, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lastScroll = 0;
  showHeader = true;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.prueba();
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

  async prueba(): Promise<void> {
    const pages = await this.pageService.pages();
    console.log(pages);
  }

}
