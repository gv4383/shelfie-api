import express, { Application } from 'express';
import bodyParser from 'body-parser';

import { getStatus } from './controllers/statusController';
import { getInventory } from './controllers/inventoryController';
import { addProduct } from './controllers/productController';

const app: Application = express();

app.use(bodyParser.json());

app.get('/api/status', getStatus);

app.get('/api/inventory', getInventory);

app.post('/api/product', addProduct);

app.listen(5000, (): void => console.log('Listening on port 5000'));
