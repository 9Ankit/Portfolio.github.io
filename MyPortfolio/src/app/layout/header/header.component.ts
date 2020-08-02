import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { routerHeading } from '../../shared/Api Data/JSON/headings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headingList: Array<any> = routerHeading;
  @Output() expand = new EventEmitter<{ status: boolean }>();
  isExpanded;

  constructor() {}

  ngOnInit(): void {}

  sidebarToggle() {
    this.expand.emit({
      status: this.isExpanded = false,
    });
  }
}
