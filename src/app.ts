import express, { Application } from 'express';
import bodyParser from 'body-parser';

import { router } from './routes';

const app: Application = express();

app.use(bodyParser.json());

app.use('/api', router);

app.listen(5000, (): void => console.log('Listening on port 5000'));
