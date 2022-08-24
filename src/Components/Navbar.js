import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {              
    return (
        <nav className='py-6 text-2xl flex gap-4 justify-end mb-10'>
            <NavLink to='/create'>Item Info Create</NavLink>
        </nav>
    );
};

export default Navbar;