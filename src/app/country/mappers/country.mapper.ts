import { Country, RESTCountry } from '../interfaces/country.interface';

export class CountryMapper {
  static mapToCountry(country: RESTCountry): Country {
    return {
      name: country.translations?.['spa']?.common || country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      region: country.region,
      population: country.population,
      flag: country.flag,
      flags: {
        png: country.flags.png,
        alt: country.flags.alt || 'Flag of ' + country.name.common,
      },
    };
  }

  static mapToCountries(countries: RESTCountry[]): Country[] {
    return countries.map(this.mapToCountry);
  }
}
