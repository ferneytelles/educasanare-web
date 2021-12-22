import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureHtml'
})
export class SecureHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
