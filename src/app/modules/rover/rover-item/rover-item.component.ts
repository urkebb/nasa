import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rover } from 'src/app/models/rover.model';
import { LoadingService } from 'src/app/_services/loading.service';
import { RoverService } from 'src/app/_services/rover.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-rover-item',
  templateUrl: './rover-item.component.html',
  styleUrls: ['./rover-item.component.css'],
})
export class RoverItemComponent implements OnInit {
  rover!: Rover | undefined;

  constructor(
    private route: ActivatedRoute,
    public roverService: RoverService,
    public loadingService: LoadingService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingService.loading = true;
    this.roverService.getAll().subscribe(
      (res) => {
        this.loadingService.loading = false;
        this.roverService.rovers = res.rovers;
        this.roverService.roversChanged.emit();
      },
      (err) => {
        this.loadingService.loading = false;
        this.toastService.addError(err.error.error.code);
        this.router.navigate(['auth']);
      }
    );

    const id = +this.route.snapshot.params['id'];
    if (this.roverService.rovers) {
      this.rover = this.roverService.rovers.find((rover) => rover.id === id);
    }
    this.roverService.roversChanged.subscribe((res) => {
      this.rover = this.roverService.rovers.find((rover) => rover.id === id);
    });
  }
}
