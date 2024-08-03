import { navLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

// make your link highlighted when clicking without using hooks
const Sidebar = () => {
  return (
    <div className=' h-screen left-0 top-0 sticky w-48 flex flex-col items-center shadow-xl font-medium bg-[#8fabca] max-lg:hidden'>
      <div className='flex flex-col gap-20 pt-24'>
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className='flex flex-row gap-2 text-gray'
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className='flex flex-row gap-2 mt-20'>
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default Sidebar;
