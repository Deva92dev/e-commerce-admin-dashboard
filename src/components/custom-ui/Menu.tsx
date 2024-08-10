'use client';

import { UserButton } from '@clerk/nextjs';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MenuIcon
        className='cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className='absolute bg-[#4D4c4C] text-white w-full h-[calc((100vh-80px)/2)] top-20 right-0 flex flex-col items-center justify-center text-lg gap-6 z-30'>
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
          <Link href='/contact'>Contact-Us</Link>
          <Link href='/wishlist'>Wishlist</Link>
          <Link href='/cart'>Cart</Link>
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default Menu;
