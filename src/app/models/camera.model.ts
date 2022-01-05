export class Camera {
  id!: number;
  name!: string;
  rover_id!: Number;
  full_name!: string;

  constructor(config?: any) {
    if (config != null || config != undefined) {
      Object.assign(this, config);
    }
  }
}
