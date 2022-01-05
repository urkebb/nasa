import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() controlName!: string;
  errors: any = null;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  handleChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    this.errors = formGroup.get(this.controlName)?.errors;
  }
}
