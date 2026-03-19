import { Component } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';

@Component({
  selector: 'country-pais',
  templateUrl: './pais.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryPaisPageComponent {}
