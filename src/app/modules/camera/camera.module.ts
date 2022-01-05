import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraListComponent } from './camera-list/camera-list.component';
import { CameraItemComponent } from './camera-item/camera-item.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [CameraListComponent, CameraItemComponent],
  imports: [CommonModule, CameraRoutingModule, ComponentsModule],
  exports: [CameraListComponent, CameraItemComponent],
})
export class CameraModule {}
