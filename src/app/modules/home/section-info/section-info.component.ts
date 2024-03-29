import { Component, Input, OnInit } from '@angular/core';
import { URL_MEDIA } from '@env/environment.prod';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent implements OnInit {

  @Input() section: any;
  text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, rerum tenetur harum fugit similique placeat numquam ullam, voluptas saepe molestias eius et animi aut! Ea atque et facilis. Enim, incidunt? Laudantium, placeat et blanditiis distinctio eum atque voluptatum eius temporibus, tempora nam saepe optio accusantium perspiciatis eligendi repellat beatae fuga ex quaerat minus! Officiis nostrum fuga recusandae dignissimos, similique minus. Eum quod, minima a accusantium, omnis minus inventore veniam aliquid, voluptatum harum nobis officiis tempora? Incidunt, eveniet vitae reiciendis omnis adipisci autem sed officiis necessitatibus in nobis nostrum ad reprehenderit ipsum qui.';

  urlMedia: string;

  constructor() { }

  ngOnInit(): void {
    this.urlMedia = URL_MEDIA;
  }

}
