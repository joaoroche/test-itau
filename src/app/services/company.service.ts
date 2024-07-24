import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { IBusiness } from '../models/company';
import { catchError, switchMap } from 'rxjs/operators';
import cep from 'cep-promise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchCompanies(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching companies', error);
        return throwError(() => error);
      })
    );
  }

  fetchCompanyById(id: number): Observable<IBusiness> {
    return this.http.get<IBusiness>(`${this.apiUrl}/${id}`).pipe(
      switchMap(company =>
        from(cep(company.cep)).pipe(
          switchMap(address => {
            const enrichedCompany: IBusiness = {
              ...company,
              street: address.street,
              neighborhood: address.neighborhood,
              state: address.state,
              city: address.city,
            };
            return [enrichedCompany];
          })
        )
      ),
      catchError(error => {
        console.error('Error fetching company', error);
        return throwError(() => error);
      })
    );
  }

}
