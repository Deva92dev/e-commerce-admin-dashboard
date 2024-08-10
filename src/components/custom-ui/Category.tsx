import { getCollection } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// xl:grid-cols-3, add more designing later later
const Category = async () => {
  const collection = await getCollection();

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 my-8'>
      <h2 className='text-3xl font-bold text-center mb-4'>Shop By Category</h2>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 '>
        {collection.map((item) => (
          <div
            key={item._id}
            className='bg-white flex flex-col md:flex-row rounded-sm hover:shadow-lg'
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className='mb-4 rounded-sm'
            />
            <Link href='/products' className='text-center m-auto'>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
