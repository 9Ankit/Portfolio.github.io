import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent implements OnInit {
  isExpanded: boolean = true;
  sidebarStatus: boolean = true;
  hoverEffect: boolean;
  sidebarMode: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 770px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sidebarStatus = true;
          this.sidebarMode = true;
        } else {
          this.sidebarStatus = false;
          this.sidebarMode = false;
        }
      });
  }

  toggledSidebar(event) {
    if (window.innerWidth < 770) {
      this.isExpanded = true;
      this.sidebarStatus = !this.sidebarStatus;
    } else {
      this.sidebarStatus = true;
      this.isExpanded = !this.isExpanded;
    }
  }

  showHideEffect(event) {
    console.log(event);
    this.hoverEffect = event;
    console.log('this.hoverEffect  ', this.hoverEffect);
  }
}
