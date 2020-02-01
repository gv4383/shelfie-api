import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => res.send('Hello World'));

app.listen(5000, () => console.log('Listening on port 5000'));
