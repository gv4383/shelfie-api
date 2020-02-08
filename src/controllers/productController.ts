import { Request, Response } from 'express';

import { inventory } from './inventoryController';

export const addProduct = (req: Request, res: Response): void => {
  // accept only 2 decimals
  const twoDecRegex = /^\d*\.?\d{0,2}$/;

  if (twoDecRegex.test(req.body.price)) {
    inventory.push(req.body);
    res.status(204).send('Ok');
  } else {
    res.status(400).send('Bad Request');
  }
};
