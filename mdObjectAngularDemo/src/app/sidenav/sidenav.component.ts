import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { SidebarMenu } from '../enums/sidebar-menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  // Component should be @Input/@Output to be controlled in the subcomponent
  @Input() sideMenu: SidebarMenu;
  @Output() sideMenuChange = new EventEmitter<SidebarMenu>();

  constructor() { }

  get SidebarMenu(): typeof SidebarMenu {
    return SidebarMenu;
  }

  menuClick = (itemCliked: SidebarMenu): void => {
    this.sideMenu = itemCliked;
    this.sideMenuChange.emit(this.sideMenu); // Notify subcomponent that the value changed.
  }
}
