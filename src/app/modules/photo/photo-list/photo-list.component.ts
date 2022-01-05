import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { LoadingService } from 'src/app/_services/loading.service';
import { PhotoService } from 'src/app/_services/photo.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos!: Photo[];

  constructor(
    public loadingService: LoadingService,
    private photoService: PhotoService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingService.loading = true;
    this.photoService.getAll().subscribe(
      (res) => {
        this.loadingService.loading = false;
        this.photos = res.photos;
        console.log(this.photos);
      },
      (err) => {
        this.toastService.addError(err.error.error.code);
        this.router.navigate(['auth']);
      }
    );
  }
}
