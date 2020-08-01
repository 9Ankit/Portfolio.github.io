import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ChargesComponent } from './charges/charges.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent,
    ChargesComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule],
})
export class FeatureModule {}
