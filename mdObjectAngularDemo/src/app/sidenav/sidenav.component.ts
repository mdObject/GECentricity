import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { SidebarMenu } from '../enums/sidebar-menu';
import { MdObjectServiceService } from '../md-object-service.service';
import { MdObject } from '@mdobject/mdobject';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  // Component should be @Input/@Output to be controlled in the subcomponent
  @Input() sideMenu: SidebarMenu;
  @Output() sideMenuChange = new EventEmitter<SidebarMenu>();

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

  get SidebarMenu(): typeof SidebarMenu {
    return SidebarMenu;
  }

  menuClick = (itemCliked: SidebarMenu): void => {
    this.sideMenu = itemCliked;
    this.sideMenuChange.emit(this.sideMenu); // Notify subcomponent that the value changed.
  }

  refresh = (): void => {
    location.reload(true);
  }
}
