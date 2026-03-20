import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { RESTCountry, Country } from '../interfaces/country.interface';
import { Observable, map } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { catchError } from 'rxjs';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(term: string): Observable<Country[]> {
    term = term.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${term}`).pipe(
      map((countries) => CountryMapper.mapToCountries(countries)),
      catchError((error) => {
        console.error('Error fetching countries by capital:', error);
        throw new Error('Failed to fetch countries by capital. Please try again later.');
      }),
    );
  }

  searchByName(term: string): Observable<Country[]> {
    term = term.toLowerCase();
    return this.http
      .get<RESTCountry[]>(`${API_URL}/name/${term}`)
      .pipe(map((countries) => CountryMapper.mapToCountries(countries)));
  }
}
