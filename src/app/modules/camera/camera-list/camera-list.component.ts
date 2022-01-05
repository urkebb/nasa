import { Component, Input, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/camera.model';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css'],
})
export class CameraListComponent implements OnInit {
  @Input() cameras?: Camera[];

  constructor() {}

  ngOnInit(): void {}
}
