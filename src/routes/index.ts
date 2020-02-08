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

router.get('/product/:id', getProduct);
router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.delete('/product/:id', deleteProduct);
