import { Request, Response } from 'express';

import { inventory } from './inventoryController';
import { hasTwoDecimals } from '../utils/validators';
import { Product } from '../types/products';

let count = 2;

export const getProduct = (req: Request, res: Response): void => {
  const { id } = req.params;
  const productIndex = inventory.findIndex((product: Product) => product.id === parseInt(id));

  if (productIndex > -1) {
    res.status(200).send(inventory[productIndex]);
  } else {
    res.status(404).send('Not Found. The requested id does not exist.');
  }
};

export const addProduct = (req: Request, res: Response): void => {
  if (hasTwoDecimals(req.body.price.toString())) {
    const newProduct = {
      id: count,
      ...req.body,
    };
    inventory.push(newProduct);
    count += 1;
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

  if (productIndex > -1) {
    inventory.splice(productIndex, 1);

    res.status(204).send('No Content');
  } else {
    res.status(404).send('Not Found. The requested id does not exist.');
  }
};
