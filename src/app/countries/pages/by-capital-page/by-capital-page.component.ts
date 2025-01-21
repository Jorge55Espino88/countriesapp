import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  //Al sólo ser instanciado una vez el servicio, lo que exista ahí nunca se perderá al cambiar de componente
  constructor(private countriesService: CountriesService) { }

  //Cuando se cree el componente, ya trae los paises del cache
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string){
    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
