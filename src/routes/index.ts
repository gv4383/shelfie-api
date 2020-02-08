import { Router } from 'express';

import { getStatus } from '../controllers/statusController';
import { getInventory } from '../controllers/inventoryController';
import { addProduct } from '../controllers/productController';

export const router = Router();

router.get('/status', getStatus);

router.get('/inventory', getInventory);

router.post('/product', addProduct);
