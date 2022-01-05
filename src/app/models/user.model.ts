export class User {
  id!: Number;
  name!: String;
  username!: String;
  email!: String;

  constructor(config?: any) {
    if (config != null || config != undefined) {
      Object.assign(this, config);
    }
  }
}
