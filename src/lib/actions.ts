'use server';

import { CollectionType, ProductType } from './types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCollection = async () => {
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not set');
  }
  const res = await fetch(`${baseUrl}/api/collections`, {
    method: 'GET',
  });
  const collections: CollectionType[] = await res.json();
  return collections;
};

export const getProducts = async () => {
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not set');
  }
  const res = await fetch(`${baseUrl}/api/products`, {
    method: 'GET',
  });
  const products: ProductType[] = await res.json();
  return products;
};
