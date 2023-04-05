import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useLoaderData()
    const {area, continents, flags:{png}, languages, name: {common, official}, population, region, startOfWeek, subregion, capital} = countryDetails[0]
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='border border-3 rounded shadow-xl w-80 mx-auto mt-10'>
        <img className='h-44 w-full' src={png} alt="Image not found" />
        <div className='p-6'>
        <h1 className='font-bold text-2xl'>Name: {common}</h1>
        <h1 className='font-semibold text-md'>Official: {official}</h1>
        <div className='font-semibold text-sm'>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Subregion: {subregion}</p>
        <p>Languages: {languages.fra ? languages.fra : languages.eng ? languages.eng : 'No data found'}</p>
        <p>Continents: {continents}</p>
        <p>Population: {population}</p>
        <p>Area: {area} (km)<sup>2</sup> </p>
        <p>Start of week: {startOfWeek}</p>
        </div>
        <div className='mt-4'>
        <Link onClick={goBack} className='bg-slate-600 text-white p-2 rounded hover:bg-slate-950 duration-500 font-semibold'>Go back</Link>
        </div>
        </div>
    </div>
    );
};

export default CountryDetails;