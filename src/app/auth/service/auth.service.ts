import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ILoginRequest, ILoginResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.API_URL;

  public login(data: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.api}/auth/login`;

    return this.http.post<ILoginResponse>(url, data);
  }

  public saveToken(token: string) {
    return localStorage.setItem('token', token);
  }
}
