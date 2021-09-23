import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselSponsorComponent } from './components/carousel-sponsor/carousel-sponsor.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannerTopComponent } from './components/banner-top/banner-top.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CapitalizePipe,
    FooterComponent,
    CarouselSponsorComponent,
    BannerTopComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CapitalizePipe,
    CarouselSponsorComponent,
    BannerTopComponent
  ]

})
export class SharedModule { }
