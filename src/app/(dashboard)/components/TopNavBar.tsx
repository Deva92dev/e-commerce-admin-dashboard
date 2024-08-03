import { navLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const TopNavBar = () => {
  return (
    <div className='lg:hidden w-full h-20 px-4 flex flex-row justify-between items-center bg-[#75a7dd] relative'>
      <h2>Logo</h2>
      <div className='flex flex-row gap-6 max-md:hidden'>
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className='flex flex-row gap-2 font-medium'
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <Menu />
      <div className=''>
        <UserButton />
      </div>
    </div>
  );
};

export default TopNavBar;
