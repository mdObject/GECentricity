import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarMenu } from '../enums/sidebar-menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() sideMenu: SidebarMenu;
  @Output() sideMenuChange = new EventEmitter<SidebarMenu>();

  constructor() { }

  ngOnInit(): void {
  }

  get SidebarMenu() {
    return SidebarMenu;
  }

  menuClick = (itemCliked: SidebarMenu): void => {
    this.sideMenu = itemCliked;
    this.sideMenuChange.emit(this.sideMenu);
  } 
}
