import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <div>
              <Logo />
            </div>

            <div>
              <Search />
            </div>

            <div>
              <Dropdown />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;