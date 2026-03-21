import { Component, signal, inject } from '@angular/core';
import CountryListComponent from '../components/country-list';
import CountrySearchComponent from '../components/search';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../services/country.service';
import { of } from 'rxjs';

@Component({
  selector: 'country-region',
  templateUrl: './region.html',
  imports: [CountryListComponent, CountrySearchComponent],
})
export default class CountryRegionPageComponent {
  private countriesService = inject(CountryService);
  term = signal<string>('');
  countriesRxResource = rxResource({
    params: () => ({ term: this.term() }),
    stream: ({ params }) => {
      if (!params.term) {
        return of([]);
      }
      return this.countriesService.searchByRegion(params.term);
    },
  });
}
