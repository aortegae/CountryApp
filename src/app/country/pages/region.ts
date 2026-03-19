import { Component } from '@angular/core';
import CountryListComponent from '../components/country-list';

@Component({
  selector: 'country-region',
  templateUrl: './region.html',
  imports: [CountryListComponent],
})
export default class CountryRegionPageComponent {}
