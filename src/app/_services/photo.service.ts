import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<{ photos: Photo[] }>(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${environment.API_KEY}&sol=0&camera=FHAZ`
    );
  }
}
