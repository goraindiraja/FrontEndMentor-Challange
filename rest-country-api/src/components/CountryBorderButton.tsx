import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Border = {
    code: string
}

export const CountryBorderButton = async ({code} : Border) => {

    const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/alpha/' + code, {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })

        const result = await response.json()
        return result
    }

    const data = await fetchData()

  return (
    <Button 
        asChild
        className='bg-element dark:text-white text-primary border shadow-xl'
    >
        <Link href={`/${data[0].cca3}`}>
            {data[0].name.common}
        </Link>
    </Button>
  )
}
