import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'secureUrl'
})
export class SecureUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any): SafeUrl {
    if (value) {
      return this.sanitizer.bypassSecurityTrustUrl(value);
    }
    return '';
  }

}
