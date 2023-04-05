import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    const {name, website, phone, company: {bs}, address: {city, street, zipcode}} = friend
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
       <div className='flex'>
         <div className='border border-3 p-8 rounded shadow-2xl mx-auto mt-10'>
            <h2 className='font-bold text-xl mb-4'>Name: {name}</h2>
            <div className='font-semibold text-md mb-2'>
            <p>City: {city}</p>
            <p>Street: {street}</p>
            <p>Zipcode: {zipcode}</p>
            <p>Company: {bs}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <button className='bg-slate-600 text-white p-2 rounded hover:bg-slate-950 duration-500 font-semibold mt-4' onClick={goBack}>Go back</button>
            </div>
        </div>
       </div>
    );
};

export default FriendDetails;