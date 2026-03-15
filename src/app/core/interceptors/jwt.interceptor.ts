import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('🔑 Interceptor chamado:', req.url);
  console.log('🔑 Token encontrado:', !!token);

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('✅ Header Authorization adicionado');
    return next(clonedRequest);
  }
  
  console.log('❌ Sem token, requisição sem Authorization');
  return next(req);
};