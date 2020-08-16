import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// declare var particlesJS: any;
declare var $: any;
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // particlesJS.load('particles-js', './assets/particles.json', null);
    // // this.ani();
    // document.body.classList.add('bg-img');
  }

  // ani() {
  //   var subElementArray = $.map($('.sub-element'), function (el) {
  //     return $(el).text();
  //   });
  //   $('.element').typed({
  //     strings: subElementArray,
  //     typeSpeed: 30,
  //     contentType: 'html',
  //     showCursor: false,
  //     loop: true,
  //     loopCount: true,
  //   });

  //   var subElementArray_tagLine = $.map($('.sub-element_tagLine'), function (
  //     el
  //   ) {
  //     return $(el).text();
  //   });

  //   $('.element_tagLine').typed({
  //     strings: subElementArray_tagLine,
  //     typeSpeed: 150,
  //     contentType: 'html',
  //     showCursor: false,
  //     loop: true,
  //     loopCount: true,
  //   });
  // }
}
