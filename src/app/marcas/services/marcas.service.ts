import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import {
  IBrand,
  IBrandsResponse,
  ICreateRequest,
  ICreateResult,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.API_URL;

  createBrand(data: ICreateRequest): Observable<ICreateResult> {
    const uri = `${this.api}/marca`;
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<ICreateResult>(uri, data, { headers });
  }

  findAll(): Observable<IBrandsResponse> {
    const uri = `${this.api}/marca`;
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IBrandsResponse>(uri, { headers });
  }

  activateBrand(id: number, activate: boolean): Observable<IBrand> {
    const uri = `${this.api}/activate-brand/${id}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.patch<IBrand>(uri, activate, { headers });
  }
}
