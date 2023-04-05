import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1 className='mb-4 text-center font-semibold text-2xl mt-2'>My total friends: {friends.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;