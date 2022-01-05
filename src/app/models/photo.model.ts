import { Camera } from './camera.model';
import { Rover } from './rover.model';

export class Photo {
  id!: Number;
  sol!: Number;
  camera!: Camera;
  img_src!: String;
  earth_date!: String;
  rover!: Rover;

  constructor(config?: any) {
    if (config != null || config != undefined) {
      Object.assign(this, config);
    }
  }
}
