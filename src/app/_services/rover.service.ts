import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Rover } from '../models/rover.model';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class RoverService {
  rovers!: Rover[];
  validApiKey!: boolean;
  roversChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    public toastService: ToastService,
    private router: Router
  ) {
    // this.loadingService.loading = true;
    // this.getAll().subscribe(
    //   (res) => {
    //     this.loadingService.loading = false;
    //     this.rovers = res.rovers;
    //     this.roversChanged.emit();
    //   },
    //   (err) => {
    //     this.loadingService.loading = false;
    //     this.toastService.addError(err.error.error.code);
    //     this.router.navigate(['/auth']);
    //   }
    // );
  }

  getAll() {
    return this.http.get<{ rovers: Rover[] }>(
      `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${environment.API_KEY}`
    );
  }
}
