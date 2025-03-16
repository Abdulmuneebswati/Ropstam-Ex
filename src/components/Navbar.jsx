import React from 'react';
import Button from './ui/Button';
import Logo from '@assets/icons/LOGO.svg';

const Navbar = () => {
  // Define an array of navigation items
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Owners', link: '/owners' },
    { name: 'Tenants', link: '/tenants' },
    { name: 'Properties', link: '/properties' },
  ];

  return (
    <nav className='bg-black/30 rounded-[16px] backdrop-blur-[1px] px-8 pt-6 pb-8 flex items-center justify-between w-full z-50'>
      <img
        src={Logo}
        alt='logo'
      />

      <ul className='flex space-x-8 text-[18px] text-white text-lg'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`font-medium cursor-pointer ${
              item.name === 'Home' ? 'font-bold' : 'text-[#F1F5F9]'
            }`}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <Button
        className=''
        variant='light'
      >
        Start Treatment
      </Button>
    </nav>
  );
};

export default Navbar;
