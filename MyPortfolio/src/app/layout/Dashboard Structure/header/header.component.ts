import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerHeading } from '../../../shared/Api Data/JSON/headings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headingList: Array<any> = routerHeading;
  @Output() expand = new EventEmitter<{ status: boolean }>();
  isExpanded;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  sidebarToggle() {
    this.expand.emit({
      status: this.isExpanded = false,
    });
  }

  loginNow() {
    this.router.navigate(['/signUp']);
    console.log('signUp');
  }
}
