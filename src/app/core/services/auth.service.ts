import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequest, AuthResponse } from '../../features/projects/domain/model/auth.model';
import { environment } from '../../../environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/auth/login`;

  private loggedInSignal = signal<boolean>(this.hasToken());

  public isLoggedIn = this.loggedInSignal.asReadonly();

  login(credentials: AuthRequest) {
    return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('portfolio_token', response.token);
        this.loggedInSignal.set(true); 
      })
    );
  }

  logout() {
    localStorage.removeItem('portfolio_token');
    this.loggedInSignal.set(false); 
  }

  getToken(): string | null {
    return localStorage.getItem('portfolio_token');
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }
}