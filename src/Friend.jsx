import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, id, username} = friend
    // console.log(friend);
    return (
        <div className='border border-3 p-6 rounded shadow-xl'>
            <p className='text-md font-medium'>Id: {id}</p>
            <h1 className='font-bold text-xl'>{name}</h1>
            <div className='text-md font-medium'>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            </div>
            <div className='mt-4'>
            <Link className='bg-slate-600 text-white p-2 rounded hover:bg-slate-950 duration-500 font-semibold' to={`/friends/${id}`}>Show more</Link>
            </div>
        </div>
    );
};

export default Friend;