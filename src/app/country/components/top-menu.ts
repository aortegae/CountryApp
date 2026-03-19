import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'country-top-menu',
  templateUrl: './top-menu.html',
  imports: [RouterLink, RouterLinkActive],
})
export class TopMenuComponent {}
