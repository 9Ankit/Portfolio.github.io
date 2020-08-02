import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ChargesComponent } from './charges/charges.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [CommonModule, DescriptionRoutingModule],
  declarations: [
    AboutMeComponent,
    BlogComponent,
    ChargesComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
  ],
})
export class DescriptionModule {}
