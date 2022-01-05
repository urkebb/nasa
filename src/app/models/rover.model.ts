import { Camera } from './camera.model';

export class Rover {
  id!: Number;
  name!: String;
  landing_date!: String;
  launch_date!: String;
  status!: 'active' | 'complete';
  max_sol?: Number;
  max_date?: String;
  total_photos?: Number;
  cameras?: Camera[];

  constructor(config?: any) {
    if (config != null || config != undefined) {
      Object.assign(this, config);
    }
  }
}
