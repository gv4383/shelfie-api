import { Request, Response } from 'express';

// eslint-disable-next-line
export let inventory: object[] = [
  {
    id: 0,
    name: 'Left Boot',
    price: 1.29,
  },
  {
    id: 1,
    name: 'Green Mitten',
    price: 8.69,
  },
];

export const getInventory = (req: Request, res: Response): void => {
  res.status(200).send(inventory);
};
