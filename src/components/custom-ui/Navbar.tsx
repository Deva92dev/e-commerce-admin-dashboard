import { navbarLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

// use html semantics, use clsx for inline links styling,

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between h-20 bg-white px-4 md:px-8 lg:px-16 xl:px-32 relative'>
      {/* smaller screens */}
      <div className='w-full flex items-center justify-between md:hidden'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='logo of website'
            width={100}
            height={100}
          />
        </Link>
        <Menu />
      </div>

      {/* bigger screens */}
      <Link href='/' className='max-md:hidden'>
        <Image src='/logo.svg' alt='logo of website' width={100} height={100} />
      </Link>
      <ul className='flex flex-row gap-8 max-md:hidden'>
        {navbarLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.url} className='hover:underline '>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex flex-row gap-6 max-md:hidden'>
        <Link href='/search'>Search</Link>
        <Link href='/wishlist'>Hearts</Link>
        <Link href='/cart'>
          <ShoppingCart />
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
