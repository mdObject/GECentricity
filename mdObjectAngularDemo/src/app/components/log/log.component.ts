import { Component, OnChanges, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/error.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {

  constructor(public es: ErrorService) { }

  get errors(): any {
    return this.es.errors;
  }
}
