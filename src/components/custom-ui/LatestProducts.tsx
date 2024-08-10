import { getProducts } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Separator } from '../ui/separator';

const LatestProducts = async () => {
  const latestProducts = await getProducts();

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 my-8'>
      <h2 className='text-3xl font-bold text-center mb-4'>Latest Products</h2>
      <Separator />
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 mt-4'>
        {latestProducts.map((item) => (
          // change href to dynamic id
          <Link href='/products' key={item._id}>
            <div>
              <Image
                src={item.media[0]}
                alt={item.title}
                width={400}
                height={400}
              />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
