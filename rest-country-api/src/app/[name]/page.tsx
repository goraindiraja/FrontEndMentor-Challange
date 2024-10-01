import { CountryBorderButton } from '@/components/CountryBorderButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Country } from '../page';

type Params = {
    name: string
}

interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

export default async function page ({params} : {params: Params}){
  const name = params.name
  console.log(name);

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/alpha/' + name, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
    })

    const result = await response.json()
    return result
  }

  const getNativeName = (nativeName: NativeName) => {
    const lastCommonNativeName = Object.keys(nativeName).reduce((acc, key) => nativeName[key].common, '');

    return lastCommonNativeName
  }

  const getCurrency = (currency: Country['currencies']) => {
    const currencyKey = Object.keys(currency)[0];
    const currencyName = currency[currencyKey].name;

    return currencyName
  }

  const data = await fetchData()

  return (
    <main className='container mx-auto p-4'>
      <Button 
        asChild
        className='mt-4 mb-8 bg-element dark:text-white text-primary shadow-xl rounded-sm px-8 space-x-2'
      >
        <Link href={"/"}>
          <IoIosArrowRoundBack className='text-3xl font-bold' />
          Back
        </Link>
      </Button>

      <section className='flex flex-col gap-12 lg:flex-row'>
        <div className='w-full h-[300px] lg:w-1/2 lg:h-[350px] overflow-hidden '>
          <img 
            src={data[0].flags.png} 
            alt="Country Flag"
            className='w-full h-full'
          />
        </div>
        
        <div className='lg:w-1/2'>
            <h1 className='text-3xl font-bold'>{data[0]?.name.common}</h1>

          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 my-6'>
              <div className='space-y-2'>
                <p><span className='font-semibold'>Native Name:</span> {getNativeName(data[0].name.nativeName)}</p>
                <p><span className='font-semibold'>Population:</span> {data[0].population}</p>
                <p><span className='font-semibold'>Region:</span> {data[0].region}</p>
              <p><span className='font-semibold'>Sub Region:</span> {data[0].subregion}</p>
                <p><span className='font-semibold'>Capital:</span> {data[0].capital}</p>
              </div>

              <div className='space-y-2'>
                <p><span className='font-semibold'>Top Level Domain:</span> {data[0].tld.join(', ')}</p>
                <p><span className='font-semibold'>Currencies:</span> {getCurrency(data[0].currencies)}</p>
                <p><span className='font-semibold'>Languages:</span> {Object.values(data[0].languages).join(', ')}</p>
              </div>
          </div>

          <div className='flex flex-col lg:flex-row gap-4 items-start'>
            <h1 className='font-semibold'>Border Countries:</h1>

            <div className='grid grid-cols-4 gap-4'>
              {data[0]?.borders?.map((border: string) => {
                return <CountryBorderButton code={border}/>
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
