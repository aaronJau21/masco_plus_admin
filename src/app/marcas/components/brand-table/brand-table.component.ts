import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Brand } from '../../interfaces';
import { MarcasService } from '../../services/marcas.service';

@Component({
  selector: 'marca-brand-table',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './brand-table.component.html',
})
export class BrandTableComponent implements OnInit {
  private readonly marcaService = inject(MarcasService);
  private readonly fb = inject(FormBuilder);

  public brands = input.required<Brand[]>();
  public displayColumns: string[] = ['id', 'name', 'activate', 'actions'];

  ngOnInit(): void {}
}
