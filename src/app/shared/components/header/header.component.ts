import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '@shared/services/session.service';
import { SearchService } from '@shared/services/search.service';
import { SessionStorageService } from '@shared/services/session-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PageService } from '@shared/services/page.service';
import to from 'await-to-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild('tag') tag: ElementRef;
  optionss = [
    {name: 'inicio', url: '/inicio'},
    {name: 'proyecto', url: '/proyecto'},
    {name: 'experiencias', url: '/experiencias'},
    {name: 'calendario', url: '/calendario'},
    {name: 'nosotros', url: '/nosotros'},
    {name: 'foros', url: '/foros'},
    {name: 'contacto', url: '/contacto'},
  ];

  options: Array<any>;

  active = -1;
  showMenu = false;
  login = false;
  profile: any;
  unsubscribe = new Subject<unknown>();
  language: string;
  languages: Array<any>;
  header: any;
  labels: any;

  constructor(
    private route: Router,
    private session: SessionService,
    private search: SearchService,
    private storage: SessionStorageService,
    private pageService: PageService
  ) {
    // console.log(route.url);

  }

  ngOnInit(): void {
    this.language = PageService.language;
    this.getHeaderInfo();
    this.session.login.pipe(takeUntil(this.unsubscribe))
    .subscribe((data: boolean) => {
      // console.log(data);
      this.profile = this.session.profile;
      this.login = data;
    });
    this.itemUrl(this.route.url);
    this.route.events.subscribe((url: any) => {
      this.itemUrl(this.route.url);
    });
    // verifica si existe session iniciada
    this.session.getInformationUser();
  }

  getHeaderInfo(): void{
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
    // console.log(this.labels);
    const project = this.storage.getStorage(SessionStorageService.keyProject);
    this.languages = project.language;
    this.header = project.header;
    this.options = project.header.find(x => x.language === this.language).menu;
  }

  changeLanguage(value: any): void{
    // console.log(value.target.value);
    this.pageService.changeLanguage.next(value.target.value);
  }

  itemUrl(url: string): void{
    let changeUrl = false;
    this.options.forEach((obj, index) => {
      if (url.includes(obj.url)){
        this.active = index;
        changeUrl = true;
      }
    });
    if (!changeUrl){
      this.active = -1;
    }
  }

  onSubmit(): void{
    // console.log('busqueda');
    if (this.tag.nativeElement.value.length > 0){
      this.storage.setStorage(
        SessionStorageService.keySearch,
        this.tag.nativeElement.value
      );
      this.search.tagSearch.next();
      this.route.navigate(['/buscador']);
      window.scroll({top: 0});
      this.tag.nativeElement.value = '';
      if (window.innerWidth < 971){
        this.showMenu = false;
        document.querySelector('body').className = '';
      }
    }
  }

  toggleMenu(): void{
    this.showMenu = !this.showMenu;
    if (this.showMenu){
      document.querySelector('body').className = 'modal-open';
    } else {
      document.querySelector('body').className = '';
    }
  }

  navigate(value: string): void{
    this.showMenu = false;
    document.querySelector('body').className = '';
    this.route.navigate([value]);
    window.scroll({top: 0, behavior: 'smooth'});
  }

  goProfile(): void{
    if (this.login){
      this.route.navigate(['/perfil']);
      this.showMenu = false;
    } else {
      this.showMenu = false;
      document.querySelector('body').className = '';
      this.session.modalSession.next(true);
    }
  }

  ngOnDestroy(): void {
    //  Called once, before the instance is destroyed.
    //  Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
