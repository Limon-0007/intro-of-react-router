import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './components/ActiveLink';

const Header = () => {
    return (
        <nav className='md:flex justify-evenly items-center py-2 text-xl font-semibold bg-slate-600 text-white'>
            <Link className='font-bold text-4xl' to="/"><img className='h-14 w-auto' src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png" alt="Image not found" /></Link>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact us</ActiveLink>
        </nav>
    );
};

export default Header;