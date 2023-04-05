import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const First = () => {
    const countries = useLoaderData()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default First;