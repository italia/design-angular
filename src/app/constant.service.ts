import { Injectable } from '@angular/core';

@Injectable()

export class ConstantService {

  constructor() { }
 
  costanti = [
    'ABCDE', 'FGHI', 'ROSSO', 'GIALLO'
  ];

  myCostant() {
    return 'queste sono le mie costanti';
  }

}