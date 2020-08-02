import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionLayoutRoutingModule } from './description-layout-routing.module';
import { DescriptionLayoutComponent } from './description-layout.component';

@NgModule({
  imports: [CommonModule, DescriptionLayoutRoutingModule],
  declarations: [DescriptionLayoutComponent],
})
export class DescriptionLayoutModule {}
