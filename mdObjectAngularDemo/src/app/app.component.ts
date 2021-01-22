import { Component } from '@angular/core';
import { SidebarMenu } from './enums/sidebar-menu';
import { SidenavComponent } from './sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdObjectAngularDemo';
  sideMenu: SidebarMenu;
  sidenavComponent: SidenavComponent;
  isExpanded = false;

  constructor() {
    this.sideMenu = SidebarMenu.PatientContact;
  }

  get SidebarMenu() {
    return SidebarMenu;
  }

}
