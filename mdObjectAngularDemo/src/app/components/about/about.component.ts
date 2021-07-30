import { Component, OnInit } from '@angular/core';

import { MdObject } from '@mdobject/mdobject';

import { MdObjectServiceService } from '../../md-object-service.service';

@Component({
  selector: 'app-about-view',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutViewComponent implements OnInit {

  mdObjectVersion: string;
  mdObject: MdObject;

  constructor(
    private mdObjectServiceService: MdObjectServiceService
  ) {
    this.mdObject = this.mdObjectServiceService.mdObject;
  }

  ngOnInit(): void {
    this.mdObjectVersion = this.mdObject.version;
  }
}

