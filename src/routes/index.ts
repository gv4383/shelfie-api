import { Router } from 'express';

import { getStatus } from '../controllers/statusController';
import { getInventory } from '../controllers/inventoryController';
import { addProduct, editProduct, deleteProduct } from '../controllers/productController';

export const router = Router();

router.get('/status', getStatus);

router.get('/inventory', getInventory);

router.post('/product', addProduct);
router.put('/product/:id', editProduct);
router.delete('/product/:id', deleteProduct);
