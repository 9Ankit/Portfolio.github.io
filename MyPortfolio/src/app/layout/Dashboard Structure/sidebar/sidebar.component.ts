import { Component, OnInit, Input } from '@angular/core';
import { routerHeading } from '../../../shared/Api Data/JSON/headings';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routerList: Array<any> = routerHeading;
  @Input() open;
  isShowing = false;
  val: any;
  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  mouseenter() {
    if (window.innerWidth >= 768) {
      console.log('sidebar window size ig greater than 800');
      if (!this.open) {
        this.isShowing = true;
      }
    }
  }

  mouseleave() {
    if (!this.open) {
      this.isShowing = false;
    }
  }

  public highlightRoww(i) {
    this.selectedIndex = i;
  }
}
