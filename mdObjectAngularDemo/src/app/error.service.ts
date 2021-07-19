import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorService {

  private errorStack: any[] = [];

  pushError(error) {
    this.errorStack.push(error);
  }

  get errors() {
    return this.errorStack;
  }
}