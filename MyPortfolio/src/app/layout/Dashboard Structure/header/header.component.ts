import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerHeading } from '../../../shared/Api Data/JSON/headings';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headingList: Array<any> = routerHeading;
  @Output() expand = new EventEmitter<boolean>();
  // isExpanded;
  mobile: boolean;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(['(min-width: 570px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
          console.log('max width 770px');
        } else {
          this.mobile = true;
          console.log('min width 770px');
        }
      });
  }

  ngOnInit(): void {}

  sidebarToggle() {
    this.expand.emit(true);
  }

  loginNow() {
    this.router.navigate(['/signUp']);
    console.log('signUp');
  }
}
