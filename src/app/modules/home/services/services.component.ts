import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '@shared/services/page.service';
import { SessionStorageService } from '@shared/services/session-storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() section: any;
  services = [
    {
      icon: 'phone_android',
      title: 'Descarga la App',
      text: 'Consectetur adipiscing elit. Praesent finibus quam sagittis, interdum nisi vitae, tristique mauris. quasi quia laudantium incidunt facere provident illo in tempore libero soluta enim perspiciatis quidem.'
    },
    {
      icon: 'school',
      title: 'Simulador Pruebas Saber',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus quam sagittis, interdum nisi vitae, tristique mauris. quasi quia laudantium incidunt facere provident illo in tempore libero soluta enim perspiciatis quidem.'
    },
    {
      icon: 'laptop_mac',
      title: 'Aula Virtual',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus quam sagittis, interdum nisi vitae, tristique mauris. quasi quia laudantium incidunt facere provident illo in tempore libero soluta enim perspiciatis quidem.'
    }
  ];

  labels: any;

  constructor(
    private storage: SessionStorageService
  ) { }

  ngOnInit(): void {
    // console.log(this.section);
    this.labels = this.storage.getStorage(SessionStorageService.keyLabels)[PageService.language];
  }

}
