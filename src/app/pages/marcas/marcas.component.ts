import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import AddBrandComponent from '../../marcas/components/add-brand/add-brand.component';
import { MarcasService } from '../../marcas/services/marcas.service';
import { Brand } from '../../marcas/interfaces';
import { FormsModule } from '@angular/forms';
import { BrandTableComponent } from '../../marcas/components/brand-table/brand-table.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    BrandTableComponent,
  ],
  templateUrl: './marcas.component.html',
  host: {
    class: 'flex-1 p-5',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MarcasComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly marcaService = inject(MarcasService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  public brands = signal<Brand[]>([]);
  public activates = signal<boolean[]>([]);

  ngOnInit(): void {
    this.findAllBrand();
  }

  public opendialog(): void {
    const dialogRef = this.dialog.open(AddBrandComponent);

    dialogRef.afterClosed().subscribe(console.log);
  }

  public findAllBrand() {
    return this.marcaService.findAll().subscribe({
      next: (r) => {
        this.brands.set(r.marcas);
        const activates = r.marcas.map((b) => b.activate);
        this.activates.set(activates);
      },
      error: (e) => {
        if (e.error.statusCode === 401) this.router.navigateByUrl('/login');
        this.toastr.error('Error');
      },
    });
  }
}
