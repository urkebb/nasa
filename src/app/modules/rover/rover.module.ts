import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoverRoutingModule } from './rover-routing.module';
import { RoverListComponent } from './rover-list/rover-list.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RoverItemComponent } from './rover-item/rover-item.component';
import { CameraModule } from '../camera/camera.module';

@NgModule({
  declarations: [RoverListComponent, RoverItemComponent],
  imports: [CommonModule, RoverRoutingModule, ComponentsModule, CameraModule],
})
export class RoverModule {}
