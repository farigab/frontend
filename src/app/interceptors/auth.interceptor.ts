import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const cloned = req.clone({ withCredentials: true });

  return next(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.includes('/auth/refresh')) {
        if (authService.isRefreshInProgress()) {
          return throwError(() => error);
        }

        return authService.refreshToken().pipe(
          switchMap((success) => {
            if (success) {
              const retryReq = req.clone({ withCredentials: true });
              return next(retryReq);
            }

            return throwError(() => error);
          }),
          catchError((refreshError) => {
            return throwError(() => error);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
