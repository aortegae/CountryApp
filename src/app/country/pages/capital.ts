import { Component, signal, inject, resource } from '@angular/core';
import CountrySearchComponent from '../components/search';
import CountryListComponent from '../components/country-list';
import { CountryService } from '../services/country.service';
import { Country } from '../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'country-capital',
  templateUrl: './capital.html',
  imports: [CountrySearchComponent, CountryListComponent],
})
export default class CountryCapitalPageComponent {
  private countryService = inject(CountryService);

  countries = signal<Country[]>([]);
  term = signal('');

  countriesResource = resource({
    params: () => ({ term: this.term() }),
    loader: async ({ params }) => {
      if (!params.term) return [];
      return await firstValueFrom(this.countryService.searchByCapital(params.term));
    },
  });

  /*
  isLoading = signal(false);
  isError = signal<string | null>(null);
  setTerm(term: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
    this.countryService.searchByCapital(term).subscribe({
      next: (countries: Country[]) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.isError.set(error.message || 'An error occurred while fetching countries.');
      },
    });
  }
  */
}
