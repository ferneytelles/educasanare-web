import { Pipe, PipeTransform } from '@angular/core';
import { URL_CDN } from '@env/environment';

@Pipe({
  name: 'cdnUrl'
})
export class CdnUrlPipe implements PipeTransform {

  transform(url: string, width = 200): string {
    return `${URL_CDN}${url}?w=${width}`;
  }

}
