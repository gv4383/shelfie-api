import { Request, Response } from 'express';

import { inventory } from './inventoryController';
import { hasTwoDecimals } from '../utils/validators';
import { Product } from '../types/products';

export const addProduct = (req: Request, res: Response): void => {
  if (hasTwoDecimals(req.body.price.toString())) {
    inventory.push(req.body);
    res.status(204).send('No Content');
  } else {
    res.status(400).send('Bad Request. Service only accepts a price with 2 decimals.');
  }
};

export const editProduct = (req: Request, res: Response): void => {
  const { id } = req.params;
  const productIndex = inventory.findIndex((product: Product) => product.id === parseInt(id));

  if (productIndex > -1) {
    inventory[productIndex].name = req.body.name;
    inventory[productIndex].price = parseFloat(req.body.price);

    res.status(204).send('No Content');
  } else {
    res.status(404).send('Not Found. The requested id does not exist.');
  }
};

export const deleteProduct = (req: Request, res: Response): void => {
  const { id } = req.params;
  const productIndex = inventory.findIndex((product: Product) => product.id === parseInt(id));
  inventory.splice(productIndex, 1);

  res.status(204).send('No Content');
};
