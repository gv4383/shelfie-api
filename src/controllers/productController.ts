import { Request, Response } from 'express';

import { inventory } from './inventoryController';
import { hasTwoDecimals } from '../utils/validators';

export const addProduct = (req: Request, res: Response): void => {
  if (hasTwoDecimals(req.body.price.toString())) {
    inventory.push(req.body);
    res.status(204).send('No Content');
  } else {
    res.status(400).send('Bad Request. Service only accepts a price with 2 decimals.');
  }
};
