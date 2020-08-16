import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { routerHeading } from '../../../shared/Api Data/JSON/headings';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  routerList: Array<any> = routerHeading;
  @Output() hover = new EventEmitter();
  @Input() open;
  isShowing = false;
  val: any;
  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  mouseenter() {
    if (window.innerWidth >= 768) {
      if (!this.open) {
        this.isShowing = true;
        this.hover.emit(true);
      }
    }
  }

  mouseleave() {
    if (!this.open) {
      this.isShowing = false;
      this.hover.emit(false);
    }
  }

  public highlightRoww(i) {
    this.selectedIndex = i;
  }
}
