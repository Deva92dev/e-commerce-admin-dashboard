export type CollectionType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: ProductType[];
};

export type ProductType = {
  _id: string;
  title: string;
  description: string;
  category: string;
  collections: [CollectionType];
  media: [string];
  tags: [string];
  sizes: [string];
  color: [string];
  price: number;
  createdAt: Date;
  updatedAt: Date;
};
