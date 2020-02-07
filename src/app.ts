import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/api/status', (req: Request, res: Response) =>
  res.status(204).send("Welp, it's working. Now what?"),
);

app.listen(5000, (): void => console.log('Listening on port 5000'));
