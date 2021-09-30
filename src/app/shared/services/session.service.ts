import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  modalSession: Subject<boolean> = new Subject<boolean>();

  session = false;

  profile = {
    img: 'assets/images/face3.jpg',
    user: 'hola_mundo',
    name: 'pablo',
    lastname: 'escobar',
    email: 'hola_mundo@gmail.com',
    password: 'hola123'
  };

  constructor() { }
}
