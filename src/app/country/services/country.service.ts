import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  getCountriesByCapital(term: string) {
    return this.http.get(`https://restcountries.com/v3.1/capital/${term}`);
  }
}
