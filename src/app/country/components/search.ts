import { Component, output, input } from '@angular/core';

@Component({
  selector: 'country-search',
  templateUrl: './search.html',
})
export default class CountrySearchComponent {
  placeholder = input<string>('Search...');
  term = output<string>();
}
