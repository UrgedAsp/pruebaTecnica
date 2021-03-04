import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string = 'http://www.mocky.io/v2/5ed0b4443500005b00ff9e02'

  constructor(private httpClient: HttpClient) { }

  // Informacion de la API
  getInfo(){
    return this.httpClient.get(this.baseUrl);
  }
}
