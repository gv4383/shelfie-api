import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router } from './routes';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

app.listen(5000, (): void => console.log('Listening on port 5000'));
