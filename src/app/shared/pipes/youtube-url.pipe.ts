import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeUrl'
})
export class YoutubeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(url: string): unknown {
    let video = '';
    let results: any;

    if (url === null) {
      return '';
    }

    // eslint-disable-next-line prefer-const
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
