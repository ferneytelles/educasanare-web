import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselSponsorComponent } from './components/carousel-sponsor/carousel-sponsor.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannerTopComponent } from './components/banner-top/banner-top.component';
import { ModalSessionComponent } from './components/modal-session/modal-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecureUrlPipe } from './pipes/secure-url.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CapitalizePipe,
    FooterComponent,
    CarouselSponsorComponent,
    BannerTopComponent,
    ModalSessionComponent,
    SecureUrlPipe
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CapitalizePipe,
    CarouselSponsorComponent,
    BannerTopComponent,
    SecureUrlPipe
  ]

})
export class SharedModule { }
