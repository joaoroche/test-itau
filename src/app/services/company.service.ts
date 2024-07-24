import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBusiness } from '../models/company';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste';

  constructor(private http: HttpClient) {}

fetchCompanies(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching companies', error);
        return throwError(() => error);
      })
    );
  }

}
