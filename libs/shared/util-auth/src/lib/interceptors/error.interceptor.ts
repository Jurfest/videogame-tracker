import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5000,
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: event.body.response });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 503:
          case 502:
          case 501:
          case 500:
          case 404:
          case 403:
          case 401:
          case 400:
            this.openSnackBar(
              'An server error or failure ocurred.'
            );
            break;

          default:
            this.openSnackBar(
              'Server failure ocurred. (Please check if server is running).'
            );
            break;
        }

        return throwError(() => error);
      })
    );
  }
}
