"use client"

import { CountryCard } from "@/components/CountryCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
}

export default function Home() {

  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  
  useEffect(()=>{
    const fetchData = async () => {

      if(!selectedRegion || selectedRegion === "none"){
        const response = await fetch('https://restcountries.com/v3.1/all',
          {
            method: 'GET',
            headers: {
              "Content-type": 'application/json'
            },
          }
        )
        const result = await response.json()
        setCountries(result)

      } else {
        const response = await fetch('https://restcountries.com/v3.1/region/' + selectedRegion,
          {
            method: 'GET',
            headers: {
              "Content-type": 'application/json'
            },
          }
        )
        const result = await response.json()
        setCountries(result)
      }
    }

    fetchData()
  }, [selectedRegion])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      <section>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="relative flex items-center lg:w-1/3">
            <IoIosSearch className="absolute left-5 top-4.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search for a country..."
              className="p-6 pl-12 text-white border-none"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <Select value={selectedRegion} onValueChange={(newValue)=> setSelectedRegion(newValue)}>
            <SelectTrigger className="w-1/2 lg:w-1/6 border-none p-6 shadow-md hover:cursor-pointer">
              <SelectValue placeholder="Filter By Region" />
            </SelectTrigger>
            <SelectContent className="bg-element border-none">
              <SelectItem value="none" className="hover:cursor-pointer">All</SelectItem>
              <SelectItem value="africa" className="hover:cursor-pointer">Africa</SelectItem>
              <SelectItem value="america" className="hover:cursor-pointer">America</SelectItem>
              <SelectItem value="asia" className="hover:cursor-pointer">Asia</SelectItem>
              <SelectItem value="europe" className="hover:cursor-pointer">Europe</SelectItem>
              <SelectItem value="oceania" className="hover:cursor-pointer">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 place-items-center lg:grid-cols-4">
          {filteredCountries.map((country) => {
            return (
              <CountryCard
                key={country?.cca3}
                flag={country?.flags?.png}
                name={country?.name?.common}
                code = {country?.cca3}
                region={country?.region}
                population={country?.population} 
                capital={country?.capital}
              />
          )})}
      </section>
    </main>
  );
}
