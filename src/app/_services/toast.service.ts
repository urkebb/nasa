import { Injectable } from '@angular/core';
import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [
    {
      show: false,
      success: true,
    },
    {
      show: false,
      success: false,
    },
  ];

  constructor() {}

  addSuccess(message: String) {
    this.toasts[0] = {
      ...this.toasts[0],
      show: true,
      message: message,
    };

    setTimeout(() => {
      this.toasts[0].show = false;
    }, 3000);
  }

  addError(message: String) {
    this.toasts[1] = {
      ...this.toasts[1],
      show: true,
      message: message,
    };

    setTimeout(() => {
      this.toasts[this.toasts.length - 1].show = false;

      console.log(this.toasts, 'TOASTS');
    }, 3000);
  }
}
