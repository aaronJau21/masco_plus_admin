import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarcasService } from '../../services/marcas.service';

@Component({
  selector: 'app-add-brand',
  standalone: true,
  imports: [
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-brand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddBrandComponent {
  private readonly fb = inject(FormBuilder);
  private readonly brandService = inject(MarcasService);

  public createBrandForm = this.fb.group({
    name: ['', Validators.required],
  });

  createBrand() {
    const data = {
      name: this.createBrandForm.value.name as string,
    };

    return this.brandService.createBrand(data).subscribe({
      next: console.log,
      error: console.log,
    });
  }
}
