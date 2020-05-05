import { Router } from 'express';

import { getStatus } from '../controllers/statusController';
import { getInventory } from '../controllers/inventoryController';
import {
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from '../controllers/productController';

export const router = Router();

router.get('/status', getStatus);

router.get('/inventory', getInventory);

router.get('/products/:id', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', deleteProduct);
