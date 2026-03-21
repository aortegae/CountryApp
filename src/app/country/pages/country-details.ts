import { Component, input, inject } from '@angular/core';
import { CountryService } from '../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.html',
  standalone: true,
  imports: [],
})
export default class CountryDetailsPageComponent {
  code = input<string>('');
  countryService = inject(CountryService);

  countryRxResource = rxResource({
    params: () => ({ code: this.code() }),
    stream: ({ params }) => {
      if (!params.code) {
        return of(null);
      }
      return this.countryService.getCountryByCode(params.code);
    }
  })
}
