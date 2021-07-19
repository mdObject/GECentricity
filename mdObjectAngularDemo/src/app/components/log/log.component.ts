import { Component, OnInit } from '@angular/core';

import { ConsoleService } from 'src/app/console.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
  }

  get messages(): any {
    return this.consoleService.messages;
  }

  send(text: string): void {
    this.consoleService.log(text);
  }
}
