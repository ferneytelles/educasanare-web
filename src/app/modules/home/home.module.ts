import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionXpComponent } from './section-xp/section-xp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { EduContentComponent } from './edu-content/edu-content.component';
import { ComicsComponent } from './comics/comics.component';
import { ServicesComponent } from './services/services.component';
import { SectionInfoComponent } from './section-info/section-info.component';



@NgModule({
  declarations: [
    CarouselComponent,
    SectionXpComponent,
    IntroductionComponent,
    EduContentComponent,
    ComicsComponent,
    ServicesComponent,
    SectionInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CarouselComponent,
    SectionXpComponent,
    IntroductionComponent,
    EduContentComponent,
    ComicsComponent,
    ServicesComponent,
    SectionInfoComponent
  ]
})
export class HomeModule { }
