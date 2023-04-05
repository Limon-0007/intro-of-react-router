import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name: {common}, capital, flags: {png}, cca3} = country
    // console.log(cca3);
    return (
        <div className='border border-3 rounded shadow-xl'>
            <img className='h-40 w-full' src={png} alt="Image not found" />
            <div className='p-6'>
            <h1 className='font-bold text-2xl'>{common}</h1>
            <p className='font-semibold text-lg'>{capital}</p>
            <div className='mt-4'>
            <Link className='bg-slate-600 text-white p-2 rounded hover:bg-slate-950 duration-500 font-semibold' to={`/${cca3}`}>Show details</Link>
            </div>
            </div>
        </div>
    );
};

export default Country;