import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { Payload } from '../models/tokenObject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  generateKey(tokenObject: Payload): string {
    return CryptoJS.AES.encrypt(JSON.stringify(tokenObject), 'mr.Dr0nh=404+6156').toString();
  }
}
