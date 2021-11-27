import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  content: any;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void>{
    this.content = await this.pageService.getPage(7, 'ES').toPromise();
    console.log(this.content);
  }
}
