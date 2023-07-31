import React from 'react';
import logo from '../../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return <Link to='/'>
    <img src={logo} alt="" width={100} height={100} className='hover:scale-110 hover:duration-700 duration-700 hidden md:block' />
  </Link>;
};

export default Logo;