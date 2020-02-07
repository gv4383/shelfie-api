import { Request, Response } from 'express';

const inventory: object[] = [
  {
    id: 0,
    name: 'Left Boot',
  },
  {
    id: 1,
    name: 'Green Mitten',
  },
];

export const getInventory = (req: Request, res: Response): void => {
  res.status(200).send(inventory);
};
