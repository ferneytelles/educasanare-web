import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { URL_MEDIA } from '@env/environment';

@Component({
  selector: 'app-main-project',
  templateUrl: './main-project.component.html',
  styleUrls: ['./main-project.component.scss']
})
export class MainProjectComponent implements OnInit {

  content: any;
  banner: any;
  imgBanner: string;
  textBanner = 'Fortalecimiento de capacidades de CTEI para la innovación educativa en educación básica y media, mediante uso de tics en instituciones oficiales del Departamento de Casanare ';
  cod = 'Código BPIN: 2020000100637';

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.content = this.storage.getStorage(
      SessionStorageService.keyPages
    ).find(obj => obj.slug === 'proyecto');
    this.banner = this.content?.sections[0]?.posts[0];
    if (this.banner.image){
      this.imgBanner = `url(${URL_MEDIA}${this.banner.image})`;
    } else {
      this.imgBanner = 'url(../../../../assets/images/banner.png)';
    }
    // console.log(this.content);
  }

}
