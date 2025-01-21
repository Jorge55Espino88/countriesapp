import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img.bandera{
      width: 25px;
    }`,
    `img.icono-bandera{
      width: 10px;
    }`
  ]
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
