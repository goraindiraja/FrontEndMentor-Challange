import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'

interface CountryData {
  flag: string
  name: string
  code: string
  population: number
  region: string
  capital: string[]
}

export const CountryCard = ({flag, name, code, population, region, capital} : CountryData) => {
  return (
    <Link href={`/${code}`}>
      <Card className="h-90 w-72 overflow-hidden hover:cursor-pointer">
        <CardContent className="h-full p-0">
          <div className="w-full h-[150px] overflow-hidden">
            <img src={flag} alt="National Flag" className='w-full h-[150px] object-fit'/>
          </div>

          <div className="px-6 pt-4 pb-8 text-sm space-y-1">
            <h1 className="font-bold mb-4 text-lg">{name}</h1>
            <h2> <span className="font-[600]">Population:</span> {population}</h2>
            <h2> <span className="font-[600]">Region:</span> {region}</h2>
            <h2> <span className="font-[600]">Capital:</span> {capital? capital[0] : "-"}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
