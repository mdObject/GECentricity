import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private messageStack :any[] = []

  constructor() { }

  log(msg: any) {
    const srt = new Date() + ": " + JSON.stringify(msg);
    console.log(srt);
    this.messageStack.push(srt);
  }

  get messages() {
    return this.messageStack;//.slice(0);
  }
}