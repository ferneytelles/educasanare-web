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
import { SectionForumComponent } from './section-forum/section-forum.component';
import { SectionPollComponent } from './section-poll/section-poll.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComicsModule } from '../comics/comics.module';
import { SectionVrComponent } from './section-vr/section-vr.component';

@NgModule({
  declarations: [
    CarouselComponent,
    SectionXpComponent,
    IntroductionComponent,
    EduContentComponent,
    ComicsComponent,
    ServicesComponent,
    SectionInfoComponent,
    SectionForumComponent,
    SectionPollComponent,
    SectionVrComponent,
  ],
  imports: [CommonModule, SharedModule, NgbModule, ComicsModule],
  exports: [
    CarouselComponent,
    SectionXpComponent,
    IntroductionComponent,
    EduContentComponent,
    ComicsComponent,
    ServicesComponent,
    SectionInfoComponent,
    SectionForumComponent,
    SectionPollComponent,
    SectionVrComponent,
  ],
})
export class HomeModule {}
