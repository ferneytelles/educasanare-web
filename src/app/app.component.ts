import { Component } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { AuthenticationService } from '@shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'educasanare-web';

  constructor(
    private authentication: AuthenticationService
  ){
    // LENGUAJE INICIAL
    if (!!localStorage.getItem('language')){
      PageService.language = localStorage.getItem('language');
    }

  }

  // async validSession(): Promise<void>{
  //   if (this.authentication.isTokenRefresh()) {

  //   }
  // }
}
