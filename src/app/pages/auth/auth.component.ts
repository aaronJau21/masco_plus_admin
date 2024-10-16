import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);
  private readonly router = inject(Router);

  hide = signal(true);

  public loginInput = this.fb.group({
    user_name: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    const data = {
      user_name: this.loginInput.value.user_name,
      password: this.loginInput.value.password,
    };

    return this.authService.login(data).subscribe({
      next: (resp) => this.authService.saveToken(resp.token),
      error: (error) => this.toastr.error(error.error.message),
      complete: () => this.router.navigateByUrl('/dashboard'),
    });
  }

  hidePassword(event: MouseEvent) {
    event.preventDefault();
    this.hide.set(!this.hide());
  }
}
