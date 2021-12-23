import { Component } from '@angular/core';
import { PageService } from '@shared/services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'educasanare-web';

  constructor(){
    // LENGUAJE INICIAL
    if (!!localStorage.getItem('language')){
      PageService.language = localStorage.getItem('language');
    }
  }
}
