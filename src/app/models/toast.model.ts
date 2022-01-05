export class Toast {
  show!: boolean;
  success!: boolean;
  message?: String;

  constructor(config: any) {
    if (config) {
      Object.assign(this, config);
    }
  }
}
