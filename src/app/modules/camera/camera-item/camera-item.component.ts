import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from 'src/app/models/camera.model';

@Component({
  selector: 'app-camera-item',
  templateUrl: './camera-item.component.html',
  styleUrls: ['./camera-item.component.css'],
})
export class CameraItemComponent implements OnInit {
  @Input() camera!: Camera;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
