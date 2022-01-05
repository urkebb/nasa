import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public loadingService: LoadingService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  handleSubmit() {
    this.loadingService.loading = true;
    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(
      (res) => {
        this.loadingService.loading = false;
        this.toastService.addSuccess('successfully registered');
        sessionStorage.setItem('user', JSON.stringify(res));
        this.authService.isLoggedIn = true;
        console.log(res.id, res.email, res.name, res.username);
        this.router.navigate(['rover']);
      },
      (err) => {
        this.loadingService.loading = false;
        console.log(err);
        this.toastService.addError(err.message);
      }
    );
  }
}
