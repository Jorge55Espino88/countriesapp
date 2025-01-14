import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }


  /*
  this: Se refiere al contexto actual de la clase en la que se encuentra este código. Es común en TypeScript y JavaScript para acceder a propiedades y métodos de la clase.

  httpClient: Es una instancia de un servicio que se utiliza para hacer solicitudes HTTP. En Angular, por ejemplo, HttpClient es un servicio que permite realizar peticiones HTTP de manera sencilla.

  .get<Country[]>: Este es un método del httpClient que se utiliza para realizar una solicitud HTTP GET. El tipo genérico <Country[]> indica que se espera que la respuesta sea un arreglo de objetos de tipo Country.

  `${this.apiUrl}/capital/${term}`: Esta es una plantilla de cadena (template string) que permite interpolar variables dentro de una cadena. Aquí se está construyendo la URL para la solicitud:

  ${this.apiUrl}: Se refiere a una propiedad de la clase que contiene la URL base de la API.
  /capital/: Es una parte fija de la URL que indica que se está buscando información sobre capitales.
  ${term}: Es otra variable que se interpolará en la URL, probablemente representando el término de búsqueda (como el nombre de una capital).
  */

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      //Construye un observable basado en el argumento que mandes )
      catchError(() => of(null))
    );
  }

  searchCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      //Construye un observable basado en el argumento que mandes
      catchError(() => of([]) )
    );
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      //Construye un observable basado en el argumento que mandes
      catchError(() => of([]) )
    );
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
    .pipe(
      //Construye un observable basado en el argumento que mandes
      catchError(() => of([]) )
    );
  }
}


