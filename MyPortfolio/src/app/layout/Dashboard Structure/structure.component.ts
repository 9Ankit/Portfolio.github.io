import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent implements OnInit {
  isExpanded = true;
  sidebarStatus: boolean = true;

  @ViewChild('sidenav') sidenav: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 770) {
      this.sidebarStatus = false;
    } else {
      this.sidebarStatus = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  toggledSidebar() {
    if (window.innerWidth < 770) {
      this.isExpanded = true;
      this.sidebarStatus = !this.sidebarStatus;
    } else {
      this.sidebarStatus = true;
      this.isExpanded = !this.isExpanded;
    }
  }
}
