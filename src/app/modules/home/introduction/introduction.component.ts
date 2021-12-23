import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Input() section: any;
  @ViewChild('video') video: ElementRef;

  height = 300;

  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus quam sagittis, interdum nisi vitae, tristique mauris. Fusce pulvinar turpis neque, vel semper dolor laoreet at. Quisque ultricies sollicitudin sapien, vel ornare arcu placerat sed. Mauris lobortis magna magna, at pharetra diam hendrerit et. Proin volutpat, nisi eget rutrum facilisis, ante eros placerat dui, quis faucibus est nisi ut nunc. Nunc vitae massa congue, egestas massa nec, volutpat tortor. Vestibulum rhoncus et ligula vel egestas. In vestibulum, eros tempor vestibulum tincidunt, lorem leo venenatis erat, at congue ligula ex at erat.Aliquam maximus semper metus, quis pellentesque purus commodo nec. Pellentesque hendrerit, ex vitae vestibulum dictum, nibh nisl tincidunt felis, a faucibus dui sapien sed neque. Nam a lectus magna. Donec blandit urna non lacus vestibulum, at sodales nulla congue. nibh nisl tincidunt felis, a faucibus dui sapien sed neque. Nam a lectus magna. Donec blandit urna non lacus vestibulum, at sodales nulla congue.`;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.height = this.video.nativeElement.getBoundingClientRect().width * 0.5;
    }, );
  }

}
