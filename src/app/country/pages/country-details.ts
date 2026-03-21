import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.html',
  standalone: true,
  imports: [RouterLink],
})
export default class CountryDetailsPageComponent {
  code = input<string>('');
}
