import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import CountryListComponent from '../components/country-list';
import { of } from 'rxjs';

@Component({
  selector: 'country-continent',
  templateUrl: './continent.html',
  imports: [CountryListComponent],
})
export default class ContinentPageComponent {
  countryService = inject(CountryService);
  selectedContinent = signal<string>('');
  public regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

  countriesRxResource = rxResource({
    params: () => ({ continent: this.selectedContinent() }),
    stream: ({ params }) => {
      if (!params.continent) {
        return of([]);
      }
      return this.countryService.searchByRegion(params.continent);
    },
  });

  setSelectedItem(continent: string) : void {
    this.selectedContinent.set(continent);
    console.log(continent);
  }
}
