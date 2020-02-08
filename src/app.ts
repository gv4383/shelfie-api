import express, { Application } from 'express';
import bodyParser from 'body-parser';

import { getStatus } from './controllers/statusController';
import { getInventory } from './controllers/inventoryController';

const app: Application = express();

app.use(bodyParser.json());

app.get('/api/status', getStatus);

app.get('/api/inventory', getInventory);

app.listen(5000, (): void => console.log('Listening on port 5000'));
