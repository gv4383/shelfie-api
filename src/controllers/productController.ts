import { Request, Response } from 'express';

import { inventory } from './inventoryController';

export const addProduct = (req: Request, res: Response): void => {
  inventory.push(req.body);
  res.status(204).send('Ok');
};
