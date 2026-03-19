import { Component, signal, inject } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'country-capital',
  templateUrl: './capital.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryCapitalPageComponent {
  private countryService = inject(CountryService);
  setTerm(term: string) {
    console.log('Search term updated:', term);
    console.log('fetch:', this.countryService.getCountriesByCapital(term).subscribe());
  }
}
