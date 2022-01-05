import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoRoutingModule, ComponentsModule],
})
export class PhotoModule {}
