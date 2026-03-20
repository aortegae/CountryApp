import { Component, resource, signal, inject } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-pais',
  templateUrl: './pais.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryPaisPageComponent {
  countryService = inject(CountryService);
  term = signal('');

  paisRxResource = rxResource({
    params: () => ({ term: this.term() }),
    stream: ({ params }) => {
      if (!params.term) return of([]);
      console.log('using rxResource');
      return this.countryService.searchByName(params.term);
    },
  });

  paisResource = resource({
    params: () => ({ term: this.term() }),
    loader: async ({ params }) => {
      if (!params.term) return [];
      return firstValueFrom(this.countryService.searchByName(params.term));
    },
  });
}
