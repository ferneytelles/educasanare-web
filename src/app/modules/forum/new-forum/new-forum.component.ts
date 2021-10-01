import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-forum',
  templateUrl: './new-forum.component.html',
  styleUrls: ['./new-forum.component.scss']
})
export class NewForumComponent implements OnInit {

  category = 'Robótica';
  height = 154;
  @ViewChild('textArea') text: ElementRef;
  @ViewChild('label') labelFile: ElementRef;

  constructor(private route: Router) {
    const vector = route.url.split('/');
    console.log(vector[2]);
  }

  ngOnInit(): void {
  }

  setHeight(): void{
    if (this.text.nativeElement.scrollHeight > this.height){
      this.height = this.text.nativeElement.scrollHeight + 2;
    }
  }

  cancelText(): void{
    this.text.nativeElement.value = '';
    this.height = 154;
  }

  changeFile(input: any): void{
    console.log(input);
    console.log(input.target.files[0].name);
    const ext = input.target.files[0].type.split('.').shift();
    const size = input.target.files[0].size;

    if (ext === 'image'){
      if (size > 2097152){
        alert('El archivo de imagen no puede superar 2MB');
        input.target.value = '';
        // input.target.files.shift();
        this.labelFile.nativeElement.innerHTML = '';
      } else{
        this.labelFile.nativeElement.innerHTML = input.target.files[0].name;
      }
    } else {
      if (size > 20971520){
        alert('El archivo de video no puede superar 20MB');
        input.target.value = '';
        // input.target.files.shift();
        this.labelFile.nativeElement.innerHTML = '';
      } else{
        this.labelFile.nativeElement.innerHTML = input.target.files[0].name;
      }
    }
  }

}
