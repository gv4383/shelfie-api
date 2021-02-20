import { Request, Response } from 'express';

import { Product } from '../types/products';

// eslint-disable-next-line
export let inventory: Product[] = [
  {
    id: 0,
    image_url:
      'https://images.unsplash.com/photo-1517649357390-d11df376d303?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80',
    name: 'Left Boot',
    price: 1.29,
  },
  {
    id: 1,
    image_url:
      'https://images.unsplash.com/photo-1525383734057-57832c535c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    name: 'Green Mitten',
    price: 8.69,
  },
];

export const getInventory = (req: Request, res: Response): void => {
  res.status(200).send(inventory);
};
