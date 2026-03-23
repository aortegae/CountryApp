export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';

export interface Country {
  code: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  flags: {
    png: string;
    alt: string;
  };
}

export interface RESTCountry {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  landlocked: boolean;
  borders?: string[];
  area: number;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flag: string;
  currencies?: Record<string, Currency>;
  languages?: Record<string, string>;
  latlng: [number, number];
  demonyms?: Record<string, Demonym>;
  translations: Record<string, Translation>;
  gini?: Record<string, number>;
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs?: string[];
  side: 'left' | 'right' | string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng?: [number, number];
}

export interface PostalCode {
  format: string | null;
  regex: string | null;
}
