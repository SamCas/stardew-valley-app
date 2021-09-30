import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons8-stardew-valley.svg';

import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='signin'> SignIn </Link>
        </div>
    </div>
);

export default Header;