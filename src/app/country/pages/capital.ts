import { Component, signal } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';

@Component({
  selector: 'country-capital',
  templateUrl: './capital.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryCapitalPageComponent {
  setTerm(term: string) {
    console.log('Search term updated:', term);
  }
}
