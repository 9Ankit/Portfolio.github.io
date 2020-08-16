import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

//Shared Components Starts
import { HeaderComponent } from './layout/Dashboard Structure/header/header.component';
import { SidebarComponent } from './layout/Dashboard Structure/sidebar/sidebar.component';
import { StructureComponent } from './layout/Dashboard Structure/structure.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ParticleComponent } from './shared/Component/Particle/particle.component';
//Shared Components Ends

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/Angular Material/shared-material.module';
import { MatIconModule } from '@angular/material/icon'; //2time using already calling shared module

//Routing
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.routing';

// Authentication Structure
import { AuthStructureComponent } from './layout/Auth Structure/auth-structure.component';
import { LeftImageComponent } from './layout/Auth Structure/left-image/left-image.component';
import { RightTextComponent } from './layout/Auth Structure/right-text/right-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    StructureComponent,
    AuthStructureComponent,
    LeftImageComponent,
    RightTextComponent,
    ParticleComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatIconModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
