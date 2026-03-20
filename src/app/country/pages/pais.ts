import { Component, resource, signal, inject } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'country-pais',
  templateUrl: './pais.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryPaisPageComponent {
  countryService = inject(CountryService);
  term = signal('');

  paisResource = resource({
    params: () => ({ term: this.term() }),
    loader: async ({ params }) => {
      if (!params.term) return [];
      return firstValueFrom(this.countryService.searchByName(params.term));
    },
  });
}
