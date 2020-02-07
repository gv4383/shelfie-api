import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { getInventory } from './controllers/inventoryController';

const app: Application = express();

app.use(bodyParser.json());

app.get('/api/status', (req: Request, res: Response) => {
  res.status(204).send("Welp, it's working. Now what?");
});

app.get('/api/inventory', getInventory);

app.listen(5000, (): void => console.log('Listening on port 5000'));
