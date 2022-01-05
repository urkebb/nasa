import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rover } from 'src/app/models/rover.model';
import { LoadingService } from 'src/app/_services/loading.service';
import { RoverService } from 'src/app/_services/rover.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-rover-list',
  templateUrl: './rover-list.component.html',
  styleUrls: ['./rover-list.component.css'],
})
export class RoverListComponent implements OnInit {
  rovers!: Rover[];

  constructor(
    public roverService: RoverService,
    public loadingService: LoadingService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadingService.loading = true;
    this.roverService.getAll().subscribe(
      (res) => {
        this.loadingService.loading = false;
        this.roverService.rovers = res.rovers;
        this.roverService.validApiKey = true;
        this.roverService.roversChanged.emit();
      },

      (err) => {
        this.loadingService.loading = false;
        this.roverService.validApiKey = false;
        this.router.navigate(['auth']);
        this.toastService.addError(err.error.error.code);
      }
    );
  }

  handleClick(index: Number) {
    this.router.navigate([index], { relativeTo: this.route });
    // console.log('clicked', index);
  }
}
