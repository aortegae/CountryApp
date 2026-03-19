import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../country/components/top-menu';

@Component({
  selector: 'app-country-layout',
  templateUrl: './CountryLayout.html',
  imports: [RouterOutlet, TopMenuComponent],
})
export class CountryLayout {}
