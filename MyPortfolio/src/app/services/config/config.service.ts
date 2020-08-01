import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public baseUrl = null;
  public baseImageUrl = null;

  constructor() {
    this.baseUrl = 'mmeapi/';
    this.baseImageUrl = 'http://someURL';
   }

  
}
