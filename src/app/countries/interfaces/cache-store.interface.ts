import { Country } from "./country.interface";
import { Region } from "./region.type";


//Equivale a tener
/*
public cacheStore: CacheStore = {
    byCapital: {term: "", countries:[]},
    byCountries: {term: "", countries:[]},
    byRegion: {region: '', countries:[]}
  }
*/
export interface CacheStore{
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries{
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region?: Region;
  countries: Country[];
}
