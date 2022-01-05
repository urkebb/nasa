import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { LoadingComponent } from './loading/loading.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    LoadingComponent,
    ToastComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    LoadingComponent,
    ToastComponent,
  ],
})
export class ComponentsModule {}
