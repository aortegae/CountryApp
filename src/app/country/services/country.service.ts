import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { RESTCountry, Country } from '../interfaces/country.interface';
import { Observable, debounceTime, delay, map } from 'rxjs';
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
      debounceTime(500),
      delay(500),
      map((countries) => CountryMapper.mapToCountries(countries)),
      catchError((error) => {
        throw new Error('Failed to fetch countries by capital. Please try again later.');
      }),
    );
  }

  searchByName(term: string): Observable<Country[]> {
    term = term.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${term}`).pipe(
      debounceTime(500),
      delay(500),
      map((countries) => CountryMapper.mapToCountries(countries)),
    );
  }

  searchByRegion(term: string): Observable<Country[]> {
    term = term.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/region/${term}`).pipe(
      debounceTime(500),
      delay(500),
      map((countries) => CountryMapper.mapToCountries(countries)),
    );
  }

  getCountryByCode(code: string): Observable<Country> {
    code = code.toUpperCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      debounceTime(500),
      delay(500),
      map((countries) => CountryMapper.mapToCountry(countries[0])),
      catchError((error) => {
        throw new Error('Failed to fetch country details. Please try again later.');
      }),
    );
  }
}
