import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { AboutMeComponent } from './feature/about-me/about-me.component';
// import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    // AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    //  FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
